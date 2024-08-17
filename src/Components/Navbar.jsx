import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 bg-opacity-90 backdrop-blur-md shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg">NYF</div>
        <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Menu'}
        </div>
        <ul className={`md:flex md:space-x-8 text-white font-semibold absolute md:static bg-gray-950 w-full left-0 md:w-auto md:bg-transparent transition-all duration-300 ease-in ${isOpen ? 'top-16 opacity-100' : 'top-[-300px] opacity-0'} md:opacity-100`}>
          <li className="text-center md:text-left my-2 md:my-0">
            <HashLink smooth to="/NYF/#home" className="block py-2 md:py-0 hover:text-cyan-500">Home</HashLink>
          </li>
          <li className="text-center md:text-left my-2 md:my-0">
            <HashLink smooth to="/NYF/#contact" className="block py-2 md:py-0 hover:text-cyan-500">Contact</HashLink>
          </li>
          <li className="text-center md:text-left my-2 md:my-0">
            <Link to="/blog" className="block py-2 md:py-0 hover:text-cyan-500">Blog</Link>
          </li>
          <li className="text-center md:text-left my-2 md:my-0">
            <Link to="/sosmed" className="block py-2 md:py-0 hover:text-cyan-500">Sosmed</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
