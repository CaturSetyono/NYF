import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="border-t-2 border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white pt-16 md:pt-16 px-4"
    >
      <div className="flex flex-col md:flex-row max-w-5xl w-full p-8 gap-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Welcome to NYF, your ultimate destination for all things gaming. We
            are a team of dedicated enthusiasts who are passionate about gaming.
            We believe that gaming is not just a hobby, but a passion. We strive
            to provide our users with the best gaming experience possible.
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
  );
};

export default About;
