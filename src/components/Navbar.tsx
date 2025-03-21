'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { contactInfo } from '@/utils/config';
import Container from './Container';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Update scrolled state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Nav links with active state handling
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 relative z-20">
            <div className={`font-bold text-xl sm:text-2xl ${scrolled || isOpen ? 'text-blue-600' : 'text-white'}`}>
              Clear Water <span className={scrolled || isOpen ? 'text-blue-900' : 'text-blue-200'}>Pool Service</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive 
                      ? (scrolled ? 'text-blue-600 bg-blue-50' : 'text-white bg-white/10') 
                      : (scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/10')
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button 
              href="/contact"
              variant="primary"
              size="sm"
              className="ml-2"
            >
              Request a Quote
            </Button>
          </div>

          {/* Phone Number - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <FaPhone className={scrolled ? "text-blue-600" : "text-white"} />
            <a 
              href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} 
              className={`font-medium ${scrolled ? "text-blue-600" : "text-white"} hover:text-blue-400 transition-colors`}
            >
              {contactInfo.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative z-20 p-2 rounded-md ${
              isOpen 
                ? 'bg-blue-50' 
                : (scrolled ? 'text-gray-700' : 'text-white')
            } mobile-toggle`}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-6 absolute top-full left-0 right-0 mx-4 border-t border-gray-100 mobile-menu">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`p-2 rounded-md ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-gray-100">
                <Button
                  href="/contact"
                  variant="primary"
                  fullWidth
                  onClick={() => setIsOpen(false)}
                >
                  Request a Quote
                </Button>
              </div>
              
              <div className="flex items-center space-x-2 text-blue-600 pt-2">
                <FaPhone />
                <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="font-medium">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;