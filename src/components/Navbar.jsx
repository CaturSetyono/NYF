import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">NYF</Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/portofolio" className="hover:text-blue-400">Portofolio</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700 mt-2 rounded-md`}>
        <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-600 rounded-md" onClick={toggleMenu}>Home</Link>
        <Link to="/portofolio" className="block px-4 py-2 text-white hover:bg-gray-600 rounded-md" onClick={toggleMenu}>Portofolio</Link>
        <Link to="/contact" className="block px-4 py-2 text-white hover:bg-gray-600 rounded-md" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
