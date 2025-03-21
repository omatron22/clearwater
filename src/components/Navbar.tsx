'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';
import { contactInfo } from '@/utils/config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 relative z-20">
            <div className={`font-bold text-xl sm:text-2xl ${scrolled || isOpen ? 'text-blue-600' : 'text-white'}`}>
              Clear Water <span className={scrolled || isOpen ? 'text-blue-800' : 'text-blue-200'}>Pool Service</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-400 font-medium transition-colors`}>
              Home
            </Link>
            <Link href="/services" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-400 font-medium transition-colors`}>
              Services
            </Link>
            <Link href="/gallery" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-400 font-medium transition-colors`}>
              Gallery
            </Link>
            <Link href="/about" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-400 font-medium transition-colors`}>
              About
            </Link>
            <Link href="/contact" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-400 font-medium transition-colors`}>
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ml-2"
            >
              Request a Quote
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <FaPhone className={scrolled ? "text-blue-600" : "text-white"} />
            <a 
              href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} 
              className={`font-medium ${scrolled ? "text-blue-600" : "text-white"} hover:text-blue-400 transition-colors`}
            >
              {contactInfo.phone}
            </a>
          </div>

          <button
            className={`md:hidden relative z-20 p-1 ${scrolled || isOpen ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-6 absolute top-full left-0 right-0 mx-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </Link>
              <div className="flex items-center space-x-2 text-blue-600 pt-4">
                <FaPhone />
                <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="font-medium">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;