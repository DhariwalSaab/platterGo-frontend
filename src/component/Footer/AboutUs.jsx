import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white !py-16 !px-4 sm:!px-6 lg:!px-8 text-gray-800 !mt-10">
      <div className="max-w-5xl !mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-tomato !mb-6">
          About PlatterGo
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl !mx-auto">
          PlatterGo is your smart partner in ordering food ahead of time.
          Whether you're dining in or taking away, we streamline your
          experience, save you time, and keep your tastebuds happy.
        </p>
      </div>

      <div className="!mt-16 grid grid-cols-1 !md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Team cooking together"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="!space-y-6">
          <h2 className="text-2xl font-semibold text-tomato">Why PlatterGo?</h2>
          <p>
            Founded with a mission to simplify food ordering at restaurants,
            PlatterGo lets customers pre-order their meals, skip the wait, and
            enjoy food right on time.
          </p>
          <p>
            We’re redefining how dine-in and takeaway works by offering
            real-time order tracking, personalized suggestions, and secure
            payments—all in one sleek app.
          </p>
          <p>
            At PlatterGo, we're not just building software. We're building
            experiences that turn meals into memories.
          </p>
        </div>
      </div>

      <div className="!mt-20 text-center">
        <h2 className="text-2xl font-semibold text-tomato !mb-4">Our Vision</h2>
        <p className="text-lg text-gray-600 max-w-3xl !mx-auto">
          To revolutionize restaurant experiences by bridging technology and
          dining, making food ordering seamless, personalized, and
          delightful—every time.
        </p>
      </div>

      <div className="!mt-16 text-center">
        <h2 className="text-2xl font-semibold text-tomato !mb-4">
          Meet the Team
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl !mx-auto !mb-6">
          We're a passionate team of foodies, developers, and designers working
          to make dining better through tech.
        </p>
        {/* Add team members later if needed */}
      </div>
    </div>
  );
};

export default AboutUs;
