import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import myContext from './context/myContext';

const Footer = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <footer
      style={{
        backgroundColor: mode === 'dark' ? '#282c34' : '#1a202c',
        color: mode === 'dark' ? '#f8f9fa' : '#edf2f7',
      }}
      className="py-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: mode === 'dark' ? '#f8f9fa' : '#edf2f7' }}
            >
              Springdale Public School
            </h2>
            <p className="text-sm" style={{ color: mode === 'dark' ? '#f8f9fa' : '#edf2f7' }}>
              123 Education Lane, Cityville, State, ZIP Code
            </p>
            <p className="text-sm" style={{ color: mode === 'dark' ? '#f8f9fa' : '#edf2f7' }}>
              Phone: +1 (123) 456-7890
            </p>
            <p className="text-sm" style={{ color: mode === 'dark' ? '#f8f9fa' : '#edf2f7' }}>
              Email: <a href="mailto:info@springdale.edu" className="text-blue-400 hover:underline">info@springdale.edu</a>
            </p>
          </div>
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600"><FaFacebook size={24} /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaLinkedin size={24} /></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link to="/" className="text-lg mx-2 block md:inline hover:text-gray-300">Home</Link>
            <Link to="/about" className="text-lg mx-2 block md:inline hover:text-gray-300">About Us</Link>
            <Link to="/students" className="text-lg mx-2 block md:inline hover:text-gray-300">Students</Link>
            <Link to="/gallery" className="text-lg mx-2 block md:inline hover:text-gray-300">Gallery</Link>
            <Link to="/contact" className="text-lg mx-2 block md:inline hover:text-gray-300">Contact Us</Link>
          </div>
          <p className="text-sm" style={{ color: mode === 'dark' ? '#f8f9fa' : '#edf2f7' }}>&copy; 2024 Springdale Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
