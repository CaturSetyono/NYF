import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Bagian Deskripsi */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            Kami adalah konten kreator yang berfokus pada pengembangan teknologi dan edukasi digital.
            Dengan pengalaman yang luas dalam dunia digital, kami berdedikasi untuk memberikan konten yang berkualitas.
          </p>
        </div>

        {/* Bagian Sosial Media */}
        <div className="md:w-1/2 flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-8">
          <a href="https://www.linkedin.com/in/catur-setyono" className="text-gray-400 hover:text-blue-500 flex items-center">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <span className="ml-2">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/notyorfriend_id" className="text-gray-400 hover:text-pink-500 flex items-center">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <span className="ml-2">Instagram</span>
          </a>
          <a href="https://wa.me/081393667609" className="text-gray-400 hover:text-green-500 flex items-center">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <span className="ml-2">WhatsApp</span>
          </a>
          <a href="https://github.com/CaturSetyono" className="text-gray-400 hover:text-gray-400 flex items-center">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <span className="ml-2">GitHub</span>
          </a>
        </div>
      </div>

      <div className="text-center text-gray-600 mt-8">
        <p>© 2024 Catur Setyono. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
