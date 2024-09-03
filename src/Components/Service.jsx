import React from "react";
import { RiAdvertisementLine } from "react-icons/ri";
import { TbAffiliateFilled } from "react-icons/tb";
import { TfiSupport } from "react-icons/tfi";

const Service = () => {
  return (
    <div className="border-t-2 border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white  text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Service</h2>
      <div className="flex flex-col md:flex-row w-full p-8 gap-8 justify-center items-center">
        {/** Card 1 */}
        <div className="group flex-1 rounded-2xl hover:shadow-2xl hover:bg-gray-800 border-2 border-gray-100 flex flex-col justify-center items-center p-8 transform transition-all duration-300 hover:scale-105">
          <RiAdvertisementLine className="w-16 h-16 md:w-24 md:h-24 mb-4 group-hover:rotate-6 transform transition-all duration-300" />
          <p className="text-sm md:text-base">
            Kami Menerima Paid Promote Untuk Mengiklankan Produk atau jasa Anda
            dengan harga yang murah namun benefit yang tidak murahan
          </p>
        </div>

        {/** Card 2 */}
        <div className="group flex-1 rounded-2xl hover:shadow-2xl hover:bg-gray-800 border-2 border-gray-100 flex flex-col justify-center items-center p-8 transform transition-all duration-300 hover:scale-105">
          <TbAffiliateFilled className="w-16 h-16 md:w-24 md:h-24 mb-4 group-hover:rotate-6 transform transition-all duration-300" />
          <p className="text-sm md:text-base">
            Kami Menerima Afiliate Promote Untuk Mengiklankan Produk atau jasa Anda
            dengan harga yang murah namun benefit yang tidak murahan
          </p>
        </div>

        {/** Card 3 */}
        <div className="group flex-1 rounded-2xl hover:shadow-2xl hover:bg-gray-800 border-2 border-gray-100 flex flex-col justify-center items-center p-8 transform transition-all duration-300 hover:scale-105">
          <TfiSupport className="w-16 h-16 md:w-24 md:h-24 mb-4 group-hover:rotate-6 transform transition-all duration-300" />
          <p className="text-sm md:text-base">
            Kami Menerima Endorsement Untuk Mengiklankan Produk atau jasa Anda
            dengan harga yang murah namun benefit yang tidak murahan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
