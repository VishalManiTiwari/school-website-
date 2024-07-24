import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CiLight } from 'react-icons/ci';
import { MdLightMode } from 'react-icons/md';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import myContext from './context/myContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(myContext);
  const { toggleMode, mode, isAuthenticated, logout } = context;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-orange-600 text-gray-900'
      } shadow-lg py-4 px-6 flex items-center justify-between`}
    >
      <Link
        to="/"
        className={`text-2xl font-bold ${
          mode === 'dark' ? 'text-white' : 'text-gray-900'
        } hover:text-gray-300 transition duration-300`}
      >
        Springdale Public School
      </Link>
      <nav
        className={`hidden md:flex flex-1 items-center justify-center space-x-6 ${
          mode === 'dark' ? 'text-gray-200' : 'text-gray-800'
        }`}
      >
        <Link className="text-lg font-semibold hover:text-gray-400 transition duration-300" to="/">Home</Link>
        <Link className="text-lg font-semibold hover:text-gray-400 transition duration-300" to="/about">About Us</Link>
        <Link className="text-lg font-semibold hover:text-gray-400 transition duration-300" to="/students">Students</Link>
        <Link className="text-lg font-semibold hover:text-gray-400 transition duration-300" to="/gallery">Gallery</Link>
        <Link className="text-lg font-semibold hover:text-gray-400 transition duration-300" to="/contact">Contact Us</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleMode}
          className="text-2xl p-2 rounded hover:bg-gray-700 transition duration-300"
          aria-label="Toggle mode"
        >
          {mode === 'light' ? <CiLight /> : <MdLightMode />}
        </button>
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 transition duration-300"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition duration-300"
          >
            <FaSignInAlt className="mr-2" />
            Login
          </Link>
        )}
        <button
          className="md:hidden text-2xl p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke={mode === 'dark' ? 'white' : 'black'}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      <nav
        className={`fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-90 ${
          isOpen ? 'block' : 'hidden'
        } md:hidden md:bg-transparent md:static md:h-auto md:flex md:items-center md:space-x-6 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 p-6 md:p-0">
          <Link
            className={`text-lg font-semibold ${
              mode === 'dark' ? 'text-gray-200' : 'text-gray-800'
            } hover:text-gray-400 transition duration-300`}
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className={`text-lg font-semibold ${
              mode === 'dark' ? 'text-gray-200' : 'text-gray-800'
            } hover:text-gray-400 transition duration-300`}
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            className={`text-lg font-semibold ${
              mode === 'dark' ? 'text-gray-200' : 'text-gray-800'
            } hover:text-gray-400 transition duration-300`}
            to="/students"
            onClick={() => setIsOpen(false)}
          >
            Students
          </Link>
          <Link
            className={`text-lg font-semibold ${
              mode === 'dark' ? 'text-gray-200' : 'text-gray-800'
            } hover:text-gray-400 transition duration-300`}
            to="/gallery"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            className={`text-lg font-semibold ${
              mode === 'dark' ? 'text-gray-200' : 'text-gray-800'
            } hover:text-gray-400 transition duration-300`}
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
