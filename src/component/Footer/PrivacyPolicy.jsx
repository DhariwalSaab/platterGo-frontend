import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl !mx-auto !px-4 !py-12 text-gray-700">
      <h1 className="text-3xl font-semibold !mb-6 text-center text-tomato">
        Privacy Policy
      </h1>

      <p className="!mb-4">
        At <strong>PlatterGo</strong>, we value your privacy and are committed
        to protecting your personal data. This Privacy Policy outlines how we
        collect, use, and safeguard your information when you use our platform.
      </p>

      <h2 className="text-xl font-semibold !mt-8 !mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc !pl-6 !space-y-2">
        <li>
          Personal Information: name, email, phone number, and payment details.
        </li>
        <li>
          Order Details: your food preferences, delivery address, and past
          orders.
        </li>
        <li>
          Technical Data: IP address, browser type, device information, and
          cookies.
        </li>
      </ul>

      <h2 className="text-xl font-semibold !mt-8 !mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc !pl-6 !space-y-2">
        <li>To provide and manage your food orders efficiently.</li>
        <li>To personalize recommendations and improve user experience.</li>
        <li>To process payments securely and send order updates.</li>
        <li>To send promotional offers (if opted-in).</li>
      </ul>

      <h2 className="text-xl font-semibold !mt-8 !mb-2">
        3. Data Sharing & Protection
      </h2>
      <p className="!mb-4">
        We do not sell your personal data. Your information may be shared with
        trusted partners (like payment gateways or restaurants) solely for
        fulfilling your orders. All data is encrypted and securely stored.
      </p>

      <h2 className="text-xl font-semibold !mt-8 !mb-2">4. Cookies</h2>
      <p className="!mb-4">
        We use cookies to remember your preferences, track usage, and enhance
        performance. You can control cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold !mt-8 !mb-2">5. Your Rights</h2>
      <p className="!mb-4">
        You have the right to access, update, or delete your personal data at
        any time. Please contact us for assistance.
      </p>

      <h2 className="text-xl font-semibold !mt-8 !mb-2">
        6. Updates to This Policy
      </h2>
      <p className="!mb-4">
        We may update our Privacy Policy periodically. Any changes will be
        reflected on this page with a revised effective date.
      </p>

      <p className="text-sm text-gray-500 !mt-10">
        Last updated: April 14, 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
