import React from "react";
import { RiAdvertisementLine } from "react-icons/ri";
import { TbAffiliateFilled } from "react-icons/tb";
import { TfiSupport } from "react-icons/tfi";

const Service = () => {
  return (
    <div className="border-t-2 border-gray-800 min-h-screen justify-center items-center bg-gray-950 text-white  md:pt-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Service</h2>
          <div className="flex flex-col md:flex-row max w-full p-8 gap-8 justify-cente items-center">
              <div className="flex-1 flex justify-center items-center w-full p-8"><RiAdvertisementLine className=" sm:w-24 sm:h-24 "/></div>
              <div className="flex-1 flex justify-center items-center w-full p-8"><TbAffiliateFilled className=" sm:w-24 sm:h-24 "/></div>
              <div className="flex-1 flex justify-center items-center w-full p-8"><TfiSupport className=" sm:w-24 sm:h-24 "/></div>
          </div>
    </div>
  );
};

export default Service;
