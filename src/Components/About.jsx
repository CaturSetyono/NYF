import React from "react";
import nyfImage from "../assets/nyf.jpeg";
function About() {
  return (
    <div
      id="about"
      className="border-t-2 border-gray-800 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white pt-8 pb-8 md:pt-16 px-4"
    >
      <div className="flex flex-col md:flex-row max-w-5xl w-full p-8 gap-8">
        <div className="flex-1 text-justify">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            NYF (notyourfriend_id) adalah seorang konten kreator yang berfokus
            pada teknologi informasi dan isu-isu terkini seputar tech dan IT
            solutions. Sebagai calon seorang web fullstack developer, NYF tidak hanya
            membagikan pengetahuan mendalam tentang pengembangan web, tetapi
            juga memberikan solusi inovatif untuk berbagai tantangan teknologi.
            Dengan gaya yang modern dan konten yang selalu up-to-date, NYF
            menjadi sumber inspirasi bagi para penggemar teknologi dan
            profesional IT.{" "}
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Kami juga membuka kerja sama dalam berbagai bentuk, seperti
            affiliate promotion, paid promotion, dan endorsement. Jika Anda
            tertarik untuk bekerja sama dengan NYF untuk mempromosikan produk
            atau layanan Anda, jangan ragu untuk menghubungi kami! Ikuti NYF
            untuk mendapatkan wawasan terbaru dan solusi praktis dalam dunia
            teknologi informasi!
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            className="rounded-lg shadow-lg max-w-[300px] h-auto"
            src={nyfImage}
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
