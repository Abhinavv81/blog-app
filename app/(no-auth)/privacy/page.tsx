import React from "react";

const About = () => {
  return (
    <>
      <div className=" py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <p className="mb-4">
            Welcome to our Privacy Policy. Your privacy is critically important
            to us.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            We collect various types of information in connection with the
            services we provide, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Personal identification information (Name, email address, phone
              number, etc.)
            </li>
            <li>
              Usage data (e.g., the pages you visit and the time spent on them)
            </li>
            <li>
              Other data collected automatically (IP address, browser type,
              etc.)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To analyze usage and improve our services</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p className="mb-4">
            We are committed to ensuring the security of your data. We employ a
            variety of security measures to protect your personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding
            your personal data, including the right to access, update, or delete
            the information we hold about you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

          <p className="mb-4">
            We encourage you to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:email@example.com"
              className="text-blue-600 hover:text-blue-800"
            >
              email@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
