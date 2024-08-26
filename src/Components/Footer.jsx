import React from "react";
import { FaFacebook, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white  p-4 ">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-center gap-[5%]">
          <div className="w-[20%]">Text</div>
          <div className="w-[20%]">Text</div>
          <div className="w-[20%]">Text</div>
          <div className="w-[20%]">Text</div>
        </div>
        <div className="border-t-2 border-gray-800 mt-16">
          <div className=" flex space-x-4 justify-center mt-8">
            <a
              href="https://web.facebook.com/profile.php?id=61562408777448"
              className="p-4 rounded-lg "
            >
              <FaFacebook className="text-4xl" />
            </a>
            <a href="https://discord.gg/z4A33TWN" className="p-4 rounded-lg ">
              <FaDiscord className="text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/notyourfriend_id/"
              className="p-4 rounded-lg"
            >
              <FaInstagram className="text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/catursetyono/"
              className="p-4 rounded-lg "
            >
              <FaLinkedin className="text-4xl" />
            </a>
          </div>
          <div className="flex space-x-4 justify-center">copyright &copy; 2023. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
