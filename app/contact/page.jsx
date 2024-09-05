import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Information and Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
              <HomeIcon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Address
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  271 Street, Phnome Penh, Cambodia
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
              <PhoneIcon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Phone
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  +885 88 29 72 083 / +885 15 94 85 02
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
              <MailIcon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Email
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  choeurnchantha64@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
            <form
              action="https://getform.io/f/bgdyoxza"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  className="block text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
