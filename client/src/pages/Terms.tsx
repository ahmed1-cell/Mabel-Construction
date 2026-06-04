import React from "react";
import { Helmet } from "react-helmet-async";

export default function TermsOfService(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Mabel Construction</title>
        <meta
          name="description"
          content="Read the terms and conditions for using Mabel Construction's website and services."
        />
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-gray-800 dark:text-gray-100">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
            Terms of Service
          </h1>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
            Effective Date: October 2025
          </p>
        </header>

        <section className="space-y-10 leading-relaxed text-justify">
          <p className="text-lg">
            Welcome to <strong>Mabel Construction</strong>. By accessing or
            using our website, you agree to comply with and be bound by the
            following Terms of Service. Please read them carefully before using
            our site or services.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              1. Acceptance of Terms
            </h2>
            <p>
              By visiting our website or engaging our services, you agree to
              these Terms of Service. If you do not agree, you may not use this
              site. We reserve the right to update or change these terms at any
              time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              2. Use of Our Website
            </h2>
            <p>
              You agree to use this website only for lawful purposes. You must
              not misuse our site by knowingly introducing viruses, attempting
              unauthorized access, or engaging in activities that may harm our
              systems or reputation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, graphics, logos,
              designs, and images — is the property of Mabel Construction and
              protected by applicable copyright laws. You may not reproduce or
              distribute any content without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              4. Service Information
            </h2>
            <p>
              We strive to ensure all information on our website is accurate and
              up-to-date. However, we make no warranties or representations
              about the completeness, reliability, or accuracy of any content or
              service details.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              5. Limitation of Liability
            </h2>
            <p>
              Mabel Construction shall not be held liable for any direct,
              indirect, incidental, or consequential damages arising out of the
              use or inability to use our website or services, even if advised
              of such possibilities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for the content, accuracy, or practices of those
              websites and recommend reviewing their own terms and policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              7. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to our
              website at any time, without notice, if you violate these Terms of
              Service or engage in conduct we deem harmful.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              8. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of Pakistan. Any disputes shall be handled
              exclusively in the courts located in Karachi, Pakistan.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              9. Contact Us
            </h2>
            <p>
              For questions or concerns about these Terms, please contact us at:
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
