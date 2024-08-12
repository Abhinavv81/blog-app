import React from "react";

const Terms = () => {
  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <p className="mb-4">
            Welcome to our Terms of Service. By using our services, you agree to
            comply with and be bound by the following terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing or using our services, you agree to be bound by these
            terms. If you do not agree to these terms, please do not use our
            services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p className="mb-4">
            We may update these terms from time to time. We will notify you of
            any changes by posting the new terms on this page. Your continued
            use of our services after any such changes constitutes your
            acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            User Responsibilities
          </h2>
          <p className="mb-4">
            You agree to use our services only for lawful purposes and in a way
            that does not infringe the rights of, restrict, or inhibit anyone
            else's use and enjoyment of the services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Intellectual Property
          </h2>
          <p className="mb-4">
            All content provided on our services, including text, graphics,
            logos, and images, is the property of our company or our content
            suppliers and is protected by copyright, trademark, and other
            intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Termination of Use
          </h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend your access to our
            services at any time, without notice, for conduct that we believe
            violates these terms or is harmful to other users of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p className="mb-4">
            To the fullest extent permitted by law, we shall not be liable for
            any damages arising out of or in connection with your use of our
            services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
          <p className="mb-4">
            These terms are governed by and construed in accordance with the
            laws of India . You agree to submit to the exclusive
            jurisdiction of the courts located within India for
            the resolution of any disputes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please
            contact us at{" "}
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

export default Terms;
