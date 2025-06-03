import React from "react";

const HelpSupport = () => {
  return (
    <div className="bg-gray-50 min-h-screen !py-16 !px-4 sm:!px-6 lg:!px-8 text-gray-800">
      <div className="max-w-5xl !mx-auto">
        <h1 className="text-4xl font-bold text-tomato text-center !mb-6">
          Help & Support
        </h1>
        <p className="text-center text-lg text-gray-600 !mb-10">
          Need help with your order or have a question? We're here to assist you
          every step of the way.
        </p>

        {/* FAQ Section */}
        <div className="!space-y-8">
          <div>
            <h2 className="text-2xl font-semibold !mb-4">
              Frequently Asked Questions
            </h2>
            <div className="!space-y-6">
              <div>
                <h3 className="font-medium text-lg text-gray-700">
                  💬 How do I place a pre-order?
                </h3>
                <p className="text-gray-600">
                  Just choose your favorite restaurant on PlatterGo, browse the
                  menu, and select a time to pick up or dine in. It’s that easy!
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-700">
                  📦 Can I cancel or modify my order?
                </h3>
                <p className="text-gray-600">
                  Yes, as long as the restaurant hasn't started preparing your
                  meal. Go to your Orders section to update or cancel.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-700">
                  💳 Is payment secure?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We use industry-standard encryption and secure
                  payment gateways to protect your information.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="!mt-12">
            <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
            <p className="text-gray-600 !mb-4">
              If your question isn’t covered above, feel free to reach out to
              our support team. We’re always happy to help!
            </p>
            <ul className="text-gray-700 !space-y-2">
              <li>
                <strong>📧 Email:</strong> support@plattergo.com
              </li>
              <li>
                <strong>📞 Phone:</strong> +1 (800) 123-4567
              </li>
              <li>
                <strong>⏰ Support Hours:</strong> 9:00 AM – 10:00 PM (Mon-Sun)
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="!mt-16 text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Still stuck?
            </h2>
            <p className="text-gray-600 !mb-4">
              Contact us and we’ll get back to you as soon as possible.
            </p>
            <a
              href="mailto:support@plattergo.com"
              className="inline-block bg-tomato text-Black !px-6 !py-2 rounded-full shadow hover:bg-red-500 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
