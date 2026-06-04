import React from "react";
import { Helmet } from "react-helmet-async";

export default function Privacy(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Mabel Construction</title>
        <meta
          name="description"
          content="Learn how Mabel Construction collects, uses, and protects your personal data in accordance with our privacy practices."
        />
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-gray-800 dark:text-gray-100">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
            Effective Date: October 2025
          </p>
        </header>

        <section className="space-y-10 leading-relaxed text-justify">
          <p className="text-lg">
            At <strong>Mabel Construction</strong>, we value your trust. This
            Privacy Policy explains how we collect, use, and safeguard your
            personal information when you visit our website or use our services.
            By accessing our website, you agree to this policy.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal details such as your name, email address,
              phone number, and project information when you contact us or fill
              out a form. We also gather non-personal data such as browser type,
              pages visited, and session duration through analytics tools.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To respond to your inquiries and provide requested services.</li>
              <li>To improve our website, services, and customer experience.</li>
              <li>To send project updates or promotional materials (only if you opt-in).</li>
              <li>To comply with legal obligations or enforce our site policies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              3. Cookies & Analytics
            </h2>
            <p>
              Our site may use cookies to enhance your browsing experience. We
              also use analytics tools to understand visitor behavior and
              improve site performance. You can disable cookies in your browser
              settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              4. Data Protection
            </h2>
            <p>
              We take appropriate technical and organizational measures to
              protect your personal data against unauthorized access, loss, or
              misuse. However, please note that no method of transmission over
              the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              5. Third-Party Services
            </h2>
            <p>
              Our website may include links or integrations with third-party
              tools (e.g., hosting providers, analytics). Each of these parties
              has its own privacy practices, and we encourage you to review
              their respective policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              6. Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data. To exercise these rights, please contact us using the
              details below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              7. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@mabelconstruction.com
              <br />
              <strong>Phone:</strong> 763-777-1962
            </p>
          </div>

          <footer className="pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Mabel Construction. All rights
            reserved.
          </footer>
        </section>
      </main>
    </>
  );
}
