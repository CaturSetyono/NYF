import React from "react";
import nyfImage from "../assets/nyf.jpeg";
function About() {
  return (
    <div
      id="about"
      className="border-t-2 border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white pt-8 pb-8 md:pt-16 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 ">About Us</h2>
      <div className="flex flex-col  md:flex-row max-w-7xl w-full p-8 gap-8 justify-center text-center">
        <div className="flex-1 p-4 flex justify-center items-center">
          <img
            className="rounded-2xl shadow-lg max-w-[300px] h-auto transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50"
            src={nyfImage}
            alt="About Us"
          />
        </div>
        <div className="flex-1 p-4 text-justify items-center">
          <p className="text-gray-300 mb-8 leading-relaxed">
            NYF (notyourfriend_id) is a content creator who focuses on on
            information technology and current issues around tech and IT
            solutions. solutions. As an aspiring fullstack web developer, NYF
            not only shares in-depth knowledge about web development, but also
            provides also provides innovative solutions to various technology
            challenges. With its modern style and up-to-date content, NYF is a
            source of inspiration for tech enthusiasts and IT professionals.
          </p>
          <br />
          <p>
            We also open cooperation in various forms, such as affiliate
            promotion, paid promotion, and endorsement. If you are interested in
            working with NYF to promote your product or service, don't hesitate
            to contact us! or your services, don't hesitate to contact us!
            Follow NYF to get the latest insights and practical solutions in the
            world of information technology!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
