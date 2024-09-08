import React from "react";
import { RiAdvertisementLine } from "react-icons/ri";
import { TbAffiliateFilled } from "react-icons/tb";
import { TfiSupport } from "react-icons/tfi";

const Service = () => {
  return (
    <div className="border-t-2 border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white  text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Service</h2>
    <div className="flex flex-col md:flex-row max-w-7xl w-full p-8 gap-12 justify-between items-center relative z-10">
        
        {/** Card 1 */}
        <div className="group flex-1 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:backdrop-blur-lg hover:bg-white/20">
          <RiAdvertisementLine className="w-16 h-16 md:w-24 md:h-24 mb-4 text-blue-400 group-hover:rotate-[360deg] group-hover:scale-110 transform transition-all duration-700" />
          <p className="text-sm md:text-base text-white/80 group-hover:text-white transition-all duration-300 text-justify">
            We offer Paid Promotion to advertise your products or services with affordable pricing and great benefits.
          </p>
          <a
            href="/get-started"
            className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Start Now
          </a>
        </div>

        {/** Card 2 */}
        <div className="group flex-1 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:backdrop-blur-lg hover:bg-white/20">
          <TbAffiliateFilled className="w-16 h-16 md:w-24 md:h-24 mb-4 text-green-400 group-hover:rotate-[360deg] group-hover:scale-110 transform transition-all duration-700" />
          <p className="text-sm md:text-base text-white/80 group-hover:text-white transition-all duration-300 text-justify">
            We provide Affiliate Promotions to help advertise your products or services with high value at low costs.
          </p>
          <a
            href="/get-started"
            className="mt-6 px-8 py-3 bg-green-500 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300"
          >
            Start Now
          </a>
        </div>

        {/** Card 3 */}
        <div className="group flex-1 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:backdrop-blur-lg hover:bg-white/20">
          <TfiSupport className="w-16 h-16 md:w-24 md:h-24 mb-4 text-yellow-400 group-hover:rotate-[360deg] group-hover:scale-110 transform transition-all duration-700" />
          <p className="text-sm md:text-base text-white/80 group-hover:text-white transition-all duration-300 text-justify">
            We offer Endorsements to promote your products or services with affordable yet valuable promotion options.
          </p>
          <a
            href="/get-started"
            className="mt-6 px-8 py-3 bg-yellow-500 hover:bg-yellow-700 text-white rounded-full shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
          >
            Start Now
          </a>
        </div>

      </div>
    </div>
  );
};

export default Service;
