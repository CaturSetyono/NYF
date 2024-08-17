import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-700 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg">NYF</div>
        <ul className={`md:flex space-x-8 text-white font-semibold ${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300`}>
          <li>
          <HashLink smooth to="/NYF/#home" className="hover:text-blue-300">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to="/NYF/#contact" className="hover:text-blue-300">Contact</HashLink>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-300">Blog</Link>
          </li>
          <li>
            <Link to="/sosmed" className="hover:text-blue-300">Sosmed</Link>
          </li>
        </ul>
        <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Menu'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
