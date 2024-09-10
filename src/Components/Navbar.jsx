import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="bg-gray-950 bg-opacity-90 backdrop-blur-md shadow-lg fixed w-full top-0 left-0 z-50"
    >
       <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg hover:text-sky-500 hover:cursor-pointer">.NYF</div>
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <ul
          className={`md:flex md:space-x-8 text-white font-semibold absolute md:static bg-gray-950 w-full left-0 md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "top-16 opacity-100" : "top-[-300px] opacity-0"
          } md:opacity-100`}
        >
          <li className="text-center md:text-left my-2 md:my-0 group">
            <HashLink
              smooth
              to="/NYF/#home"
              className="block py-2 md:py-0 hover:text-sky-500 transition-colors duration-300 relative"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </HashLink>
          </li>
          <li className="text-center md:text-left my-2 md:my-0 group">
            <HashLink
              smooth
              to="/catalog/#catalog"
              className="block py-2 md:py-0 hover:text-sky-500 transition-colors duration-300 relative"
            >
              Catalog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </HashLink>
          </li>
          <li className="text-center md:text-left my-2 md:my-0 group">
            <HashLink
              smooth
              to="/eror/#error"
              className="block py-2 md:py-0 hover:text-sky-500 transition-colors duration-300 relative"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </HashLink>
          </li>
          <li className="text-center md:text-left my-2 md:my-0 group">
            <HashLink
              smooth
              to="/NYF/#contact"
              className="block py-2 md:py-0 hover:text-sky-500 transition-colors duration-300 relative"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
