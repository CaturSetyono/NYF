import React from "react";
import { FaFacebook, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

const Sosmed= () => {
  return (
    <div
      id="sosmed"
      className="border-t-2 border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white pt-16 md:pt-8 px-4"
    >
      <div className="min-h-screen bg-gray-950 text-white flex justify-center items-center pt-4 pb-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Connect with Us on Social Media
          </h1>
          <div className="flex space-x-4 justify-center mt-16">
            <a
              href="https://web.facebook.com/profile.php?id=61562408777448"
              className="p-4 rounded-lg hover:bg-blue-600"
            >
              <FaFacebook className="text-4xl" />
            </a>
            <a
              href="https://discord.gg/z4A33TWN"
              className="p-4 rounded-lg hover:bg-indigo-500"
            >
              <FaDiscord className="text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/notyourfriend_id/"
              className="p-4 rounded-lg hover:bg-gradient-to-r hover:from-rose-600 hover:to-yellow-500"
            >
              <FaInstagram className="text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/catursetyono/"
              className="p-4 rounded-lg hover:bg-blue-500"
            >
              <FaLinkedin className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sosmed;
