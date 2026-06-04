import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
}

export default function SEOHead({
  title,
  description,
  keywords = "construction, remodeling, roofing, siding, windows, Minneapolis, St Paul, Twin Cities, Mabel Construction",
  canonicalUrl,
  ogImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=630&fit=crop",
  structuredData
}: SEOHeadProps) {
  const fullTitle = title.includes("Mabel Construction") ? title : `${title} | Mabel Construction`;
  const fullDescription = description || "Mabel Construction delivers premium construction services with bold design and exceptional quality. From custom homes to commercial projects, we build your vision with precision and style.";
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mabel Construction" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl || window.location.href} />
      <meta property="og:site_name" content="Mabel Construction" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Mabel Construction" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data for Organization */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mabel Construction",
            "description": "Premium construction services in the Twin Cities",
            "url": "https://buildwithmabel.com",
            "logo": "https://buildwithmabel.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "763-777-1962",
              "contactType": "customer service",
              "areaServed": ["Minneapolis", "St. Paul", "Maple Grove", "Plymouth", "Rogers", "Coon Rapids", "Anoka"],
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10973 bluebird street",
              "addressLocality": "Minneapolis",
              "addressRegion": "MN",
              "postalCode": "55433",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.facebook.com/mabelconstruction",
              "https://www.instagram.com/mabelconstruction",
              "https://www.linkedin.com/company/mabelconstruction"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
}
