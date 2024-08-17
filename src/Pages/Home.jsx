import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div id="home" className="min-h-screen flex flex-col justify-center items-center pt-16 md:pt-24 px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5">
            Welcome to NYF
          </h1>
          <p className="mt-4 text-lg md:text-2xl">Your journey begins here.</p>
          <button className="mt-8 px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-slate-200">
            Get Started
          </button>
        </div>
      </div>

      <div id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white pt-16 md:pt-24 px-4">
        <div className="max-w-2xl w-full p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Interested in working with me or hiring me for your next project? Drop me a line and let's make it happen.
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
            <button type="submit" className="w-full bg-teal-500 text-white p-3 rounded-lg font-semibold hover:bg-teal-600">
              Send
            </button>
          </form>
          <div className="flex justify-center mt-8 space-x-4">
            <a href="#" className="text-white hover:text-teal-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-teal-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-teal-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white hover:text-teal-400">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-white hover:text-teal-400">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <button className="mt-8 bg-transparent text-teal-500 border border-teal-500 px-6 py-2 rounded-lg hover:bg-teal-500 hover:text-white">
            <i className="fas fa-download"></i> Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
