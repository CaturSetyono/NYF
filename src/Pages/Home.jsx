import React from "react";
import { HashLink } from 'react-router-hash-link';

const Home = () => {
  return (
    <div className="bg-gray-950 text-white">
      <div
        id="home"
        className="min-h-screen flex flex-col justify-center items-center pt-16 md:pt-24 px-4"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5">
            Welcome to NYF
          </h1>
          <p className="mt-4 text-lg md:text-2xl">Your journey begins here.</p>
           <HashLink smooth to="#about">
            <button className="mt-8 px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-slate-200">
              Get Started
            </button>
            </HashLink>
        </div>
      </div>
      <div
        id="about"
        className="border-t-2 border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white pt-16 md:pt-16 px-4"
      >
        <div className="flex flex-col md:flex-row max-w-5xl w-full p-8 gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Welcome to NYF, your ultimate destination for all things gaming. We
              are a team of dedicated enthusiasts who are passionate about
              gaming. We believe that gaming is not just a hobby, but a
              passion. We strive to provide our users with the best gaming
              experience possible.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              className="rounded-lg shadow-lg max-w-[300px] h-auto"
              src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="About Us"
            />
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="border-t-2 border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white pt-16 md:pt-16 px-4"
      >
        <div className="max-w-2xl w-full p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Interested in working with me or hiring me for your next project?
            Drop me a line and let's make it happen.
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
              Send
            </button>
          </form>
         
          <button className="mt-8 bg-transparent text-sky-500 border border-sky-500 px-6 py-2 rounded-lg hover:bg-sky-500 hover:text-white">
            <i className="fas fa-download"></i> Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
