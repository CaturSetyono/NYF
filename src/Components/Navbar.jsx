import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg">NYF</div>
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-blue-300">Blog</Link></li>
          <li><Link to="/sosmed" className="hover:text-blue-300">Sosmed</Link></li>
        </ul>
        <div className="md:hidden text-white">Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
