'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Update scrolled state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Nav links with active state handling
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-20">
            <div className={`font-bold text-xl md:text-2xl ${
              scrolled || isOpen 
                ? 'text-blue-600' 
                : 'text-white'} transition-colors`
            }>
              Clear Water <span className={
                scrolled || isOpen 
                  ? 'text-blue-900' 
                  : 'text-white'
              }>Pool Service</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`px-4 py-2 rounded-md transition-all ${
                    isActive 
                      ? (scrolled ? 'text-blue-600 bg-blue-50 font-medium' : 'text-white bg-white/20') 
                      : (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:bg-white/10')
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Contact Button */}
            <Link
              href="/contact"
              className={`ml-3 px-4 py-2 rounded-md ${
                scrolled 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-white hover:bg-blue-50 text-blue-600'
              } transition-all font-medium`}
            >
              Request a Quote
            </Link>
          </div>

          {/* Phone Number - Desktop */}
          <a 
            href="tel:8054156242" 
            className={`hidden md:flex items-center gap-2 ${
              scrolled 
                ? "text-blue-600" 
                : "text-white"
            } transition-colors font-medium`}
          >
            <FaPhone className="text-sm" />
            (805) 415-6242
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md ${
              isOpen 
                ? 'bg-gray-100 text-gray-700' 
                : (scrolled ? 'text-blue-600' : 'text-white')
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 z-10 bg-white shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'top-full opacity-100' 
              : '-top-96 opacity-0'
          }`}
        >
          <div className="p-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 rounded-md my-2 ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <Link
              href="/contact"
              className="block py-3 px-4 my-3 bg-blue-600 text-white text-center rounded-md"
            >
              Request a Quote
            </Link>
            
            <a 
              href="tel:8054156242" 
              className="flex items-center justify-center gap-2 my-3 py-3 px-4 bg-gray-50 text-blue-600 rounded-md"
            >
              <FaPhone />
              (805) 415-6242
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;