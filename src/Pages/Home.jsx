import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to NYF</h1>
        <p className="mt-4 text-lg md:text-2xl">Your journey begins here.</p>
        <button className="mt-8 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
