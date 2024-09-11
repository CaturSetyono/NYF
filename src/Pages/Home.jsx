import React from "react";
import { HashLink } from 'react-router-hash-link';
import About from "../Components/About";
import Service from "../Components/Service";
import Latest from "../Components/Latest";
import Contact from "../Components/Contact";
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
      <About></About>
      <Service></Service>
      <Latest></Latest>
      <Contact></Contact>
    </div>
  );
};

export default Home;
