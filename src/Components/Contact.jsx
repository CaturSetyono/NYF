import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      id="contact"
      className="border-t-2  border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white pt-8 pb-8 md:pt-16 px-4  "
    >
      <div className="max-w-2xl w-full p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Interested in working with me or hiring me for your next project? Drop
          me a line and let's make it happen.
        </p>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full mt-2 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full mt-2 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="w-full mt-2 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white p-3 rounded-lg font-semibold hover:bg-sky-600"
          >
            <Link to="/eror">Send</Link>
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default Contact;
