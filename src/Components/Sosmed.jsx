import React from "react";

const About = () => {
  return (
    <div
      id="sosmed"
      className="border-t-2 border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white pt-16 md:pt-16 px-4"
    >
      <div className="min-h-screen bg-gray-950 text-white flex justify-center items-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Connect with Us on Social Media
          </h1>
          <div className="flex space-x-4 justify-center mt-8">
            <a
              href="https://web.facebook.com/profile.php?id=61562408777448"
              className="bg-blue-500 p-4 rounded-lg hover:bg-blue-600"
            >
              Facebook
            </a>
            <a
              href="https://discord.gg/z4A33TWN"
              className="bg-blue-400 p-4 rounded-lg hover:bg-blue-500"
            >
              Discord
            </a>
            <a
              href="https://www.instagram.com/notyourfriend_id/"
              className="bg-pink-500 p-4 rounded-lg hover:bg-pink-600"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
