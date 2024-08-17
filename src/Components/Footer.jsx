import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} NYF. All rights reserved.
        </p>
        <p className="mt-2 text-xs md:text-sm">
          This website is designed to provide the best experience for our users. Feel free to contact us with any inquiries or feedback.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
