'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-bold text-2xl text-blue-600">
              Clear Water <span className="text-blue-800">Pool Service</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium">
              Gallery
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Request a Quote
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2 text-blue-600">
            <FaPhone />
            <span className="font-medium">(805) 415-6242</span>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
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
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
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
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </Link>
              <div className="flex items-center space-x-2 text-blue-600">
                <FaPhone />
                <span className="font-medium">(805) 415-6242</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;