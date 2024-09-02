import React from "react";
import { FaFacebook, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white p-4">
      <div className="container mx-auto px-4 mt-8 text-center">
        <div className="flex justify-center items-center gap-[5%]">
          <div className="hidden md:inline">
            <a href="https://github.com/CaturSetyono" className="">WHAT WE DO</a>
          </div>
          <div className="hidden md:inline"> 
            <a href="https://ukmik.utdi.ac.id/" className="">WORK</a>
          </div>
          <div className="hidden md:inline">
            <a href="https://www.utdi.ac.id/" className="">COMPANY</a>
          </div>
          <div className="hidden md:inline">
            <a href="https://chatgpt.com/" className="">RESOURCE</a>
          </div>
        </div>
        <div className="text-light">
          <div className="flex space-x-4 justify-center mt-8">
            <a href="https://web.facebook.com/profile.php?id=61562408777448" className="p-4 rounded-lg">
              <FaFacebook className="text-3xl md:text-4xl" />
            </a>
            <a href="https://discord.gg/z4A33TWN" className="p-4 rounded-lg">
              <FaDiscord className="text-3xl md:text-4xl" />
            </a>
            <a href="https://www.instagram.com/notyourfriend_id/" className="p-4 rounded-lg">
              <FaInstagram className="text-3xl md:text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/catursetyono/" className="p-4 rounded-lg">
              <FaLinkedin className="text-3xl md:text-4xl" />
            </a>
          </div>
          <div className="flex justify-center">
            <div className="mt-8 mb-4 space-y-2 text-xs md:text-sm opacity-50">
              <h1>Jalan Ir H Juanda No : 17. Telp (0274) 2810295. Bantul Yogyakarta.</h1>
              <p className="p-4">62 (0274) 2810295</p>
              <p>catursetyono542@gmail.com</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <div className="p-8 w-[80%] border-t-2 border-gray-800 opacity-50 text-xs md:text-sm">
              Copyright © 2024 || All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
