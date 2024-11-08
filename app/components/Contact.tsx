import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="bg-cover bg-center min-h-max"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/dark-black-orange-3d-abstract-wallpaper-free-photo.jpg?w=1500&quality=50')",
      }}
    >
      <section className="text-black body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-8 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7235.876805265361!2d67.09423058903616!3d24.934168240392548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b3fa11fc15%3A0xcd134851f8e54958!2sBlock%204%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727275757068!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.6)" }} // Reduced opacity and contrast for better readability
            />
            <div className="bg-gray-300 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-red-500 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="text-black mt-1">Gulistan-e-Johar</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-red-500 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-black leading-relaxed">afsheen6441@gmail.com</a>
                <h2 className="title-font font-semibold text-red-500 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="text-black leading-relaxed">033606861922</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-lg shadow-lg">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-800">
              Contact
            </h2>
            <p className="leading-relaxed mb-5 text-blue-800">
              Feel free to contact me
            </p>

            {/* Name Field */}
            <div className="relative mb-6">
              <label htmlFor="name" className="leading-7 text-sm text-blue-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-red-500 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Email Field */}
            <div className="relative mb-6">
              <label htmlFor="email" className="leading-7 text-sm text-blue-500">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-red-500 focus:border-blue-800 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Message Field */}
            <div className="relative mb-6">
              <label htmlFor="message" className="leading-7 text-sm text-blue-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="min-w-full bg-white rounded border border-red-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 h-20 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>

            {/* Submit Button */}
            <button className="text-blue-800 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">
              Send Message
            </button>

            {/* Optional Footer */}
            <p className=" text-blue-800 mt-4 text-sm">We will get back to you shortly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
