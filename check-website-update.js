import https from 'https';
import http from 'http';

// Website to check
const baseUrl = 'https://glt.cjf.mybluehost.me';

// URLs to test
const urlsToTest = [
  '/',
  '/services',
  '/roofing-services',
  '/remodeling-services', 
  '/commercial-services',
  '/siding-services',
  '/window-services',
  '/roofing-services-in-minneapolis',
  '/remodeling-services-in-st-paul',
  '/commercial-services-in-maple-grove',
  '/siding-services-in-plymouth',
  '/window-services-in-anoka'
];

// Function to make HTTP request
function checkUrl(url) {
  return new Promise((resolve) => {
    const fullUrl = baseUrl + url;
    const protocol = fullUrl.startsWith('https:') ? https : http;
    
    const req = protocol.get(fullUrl, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const result = {
          url: url,
          status: res.statusCode,
          success: res.statusCode === 200,
          hasReactApp: data.includes('<div id="root">'),
          hasMabelConstruction: data.includes('Mabel Construction'),
          hasNewServices: data.includes('roofing-services') || data.includes('remodeling-services'),
          contentLength: data.length,
          title: extractTitle(data)
        };
        resolve(result);
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url: url,
        status: 'ERROR',
        success: false,
        error: err.message,
        hasReactApp: false,
        hasMabelConstruction: false,
        hasNewServices: false,
        contentLength: 0,
        title: 'ERROR'
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url: url,
        status: 'TIMEOUT',
        success: false,
        error: 'Request timeout',
        hasReactApp: false,
        hasMabelConstruction: false,
        hasNewServices: false,
        contentLength: 0,
        title: 'TIMEOUT'
      });
    });
  });
}

// Extract title from HTML
function extractTitle(html) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return titleMatch ? titleMatch[1].trim() : 'No title found';
}

// Main function
async function checkWebsite() {
  console.log('🔍 CHECKING MABEL CONSTRUCTION WEBSITE UPDATE STATUS');
  console.log('=' .repeat(60));
  console.log(`Base URL: ${baseUrl}`);
  console.log('=' .repeat(60));
  
  const results = [];
  
  for (const url of urlsToTest) {
    console.log(`\n📍 Testing: ${url}`);
    const result = await checkUrl(url);
    results.push(result);
    
    if (result.success) {
      console.log(`✅ Status: ${result.status} - SUCCESS`);
      console.log(`📄 Title: ${result.title}`);
      console.log(`🔧 React App: ${result.hasReactApp ? '✅ YES' : '❌ NO'}`);
      console.log(`🏗️  Mabel Construction: ${result.hasMabelConstruction ? '✅ YES' : '❌ NO'}`);
      console.log(`🆕 New Services: ${result.hasNewServices ? '✅ YES' : '❌ NO'}`);
      console.log(`📊 Content Size: ${result.contentLength} bytes`);
    } else {
      console.log(`❌ Status: ${result.status} - FAILED`);
      if (result.error) {
        console.log(`🚨 Error: ${result.error}`);
      }
    }
  }
  
  // Summary
  console.log('\n' + '=' .repeat(60));
  console.log('📊 SUMMARY REPORT');
  console.log('=' .repeat(60));
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  const hasReactApp = results.filter(r => r.hasReactApp);
  const hasNewServices = results.filter(r => r.hasNewServices);
  
  console.log(`✅ Successful requests: ${successful.length}/${results.length}`);
  console.log(`❌ Failed requests: ${failed.length}/${results.length}`);
  console.log(`🔧 Pages with React App: ${hasReactApp.length}/${results.length}`);
  console.log(`🆕 Pages with New Services: ${hasNewServices.length}/${results.length}`);
  
  // Detailed analysis
  console.log('\n🔍 DETAILED ANALYSIS:');
  
  if (successful.length === 0) {
    console.log('🚨 CRITICAL: No pages are loading successfully!');
    console.log('   - Check if files are uploaded to public_html/');
    console.log('   - Verify .htaccess file is present');
    console.log('   - Check file permissions (644 for files, 755 for folders)');
  } else if (hasReactApp.length === 0) {
    console.log('🚨 CRITICAL: React app is not loading!');
    console.log('   - Check if index.html is in public_html/');
    console.log('   - Verify assets/ folder is uploaded');
    console.log('   - Check .htaccess routing configuration');
  } else if (hasNewServices.length === 0) {
    console.log('⚠️  WARNING: New service pages may not be working!');
    console.log('   - Check if React routing is working');
    console.log('   - Verify service components are loaded');
    console.log('   - Test navigation to service pages');
  } else {
    console.log('🎉 SUCCESS: Website appears to be updated correctly!');
    console.log('   - React app is loading');
    console.log('   - New service pages are accessible');
    console.log('   - Routing is working properly');
  }
  
  // Failed URLs
  if (failed.length > 0) {
    console.log('\n❌ FAILED URLS:');
    failed.forEach(result => {
      console.log(`   - ${result.url}: ${result.status} ${result.error || ''}`);
    });
  }
  
  // Recommendations
  console.log('\n💡 RECOMMENDATIONS:');
  if (successful.length < results.length) {
    console.log('   1. Check Bluehost File Manager for uploaded files');
    console.log('   2. Verify .htaccess file exists and has correct content');
    console.log('   3. Check file permissions (files: 644, folders: 755)');
  }
  
  if (hasReactApp.length < successful.length) {
    console.log('   4. Ensure index.html and assets/ folder are uploaded');
    console.log('   5. Check browser console for JavaScript errors');
  }
  
  if (hasNewServices.length < hasReactApp.length) {
    console.log('   6. Test navigation to service pages manually');
    console.log('   7. Check if React Router is working correctly');
  }
  
  console.log('\n🔗 TEST THESE URLS MANUALLY:');
  urlsToTest.forEach(url => {
    console.log(`   ${baseUrl}${url}`);
  });
}

// Run the check
checkWebsite().catch(console.error);
