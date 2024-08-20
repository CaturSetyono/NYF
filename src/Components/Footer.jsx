import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-xs sm:text-sm md:text-base">
            &copy; {new Date().getFullYear()} NYF. All rights reserved.
          </p>
          <p className="mt-2 text-xs sm:text-sm md:text-base">
            This website is designed to provide the best experience for our users. Feel free to contact us with any inquiries or feedback guys.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
