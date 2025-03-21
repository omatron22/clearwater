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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen 
          ? 'bg-white shadow-lg py-2 backdrop-blur-md border-b border-gray-100' 
          : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 relative z-20 group">
            <div className={`font-bold text-xl sm:text-2xl ${
              scrolled || isOpen 
                ? 'text-sky-600 group-hover:text-sky-700' 
                : 'text-white group-hover:text-sky-100'} transition-colors`
            }>
              Clear Water <span className={
                scrolled || isOpen 
                  ? 'text-sky-900 group-hover:text-sky-950' 
                  : 'text-blue-100 group-hover:text-white'
              }>Pool Service</span>
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
                  className={`px-4 py-2 rounded-md transition-all ${
                    isActive 
                      ? (scrolled ? 'text-sky-600 bg-sky-50 font-medium shadow-sm' : 'text-white bg-white/15 backdrop-blur-sm shadow-md') 
                      : (scrolled ? 'text-gray-700 hover:text-sky-600 hover:bg-sky-50' : 'text-white hover:bg-white/10 hover:shadow')
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
              className="ml-3"
            >
              Request a Quote
            </Button>
          </div>

          {/* Phone Number - Desktop */}
          <div className="hidden md:flex items-center gap-2 ml-6">
            <div className={`rounded-full p-2 ${
              scrolled 
                ? "bg-sky-50 text-sky-600" 
                : "bg-white/10 text-white"
            }`}>
              <FaPhone className="text-sm" />
            </div>
            <a 
              href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} 
              className={`font-medium ${
                scrolled 
                  ? "text-sky-700 hover:text-sky-800" 
                  : "text-white hover:text-sky-100"
              } transition-colors`}
            >
              {contactInfo.phone}
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced for better visibility */}
          <button
            className={`md:hidden relative z-20 p-2.5 rounded-lg ${
              isOpen 
                ? 'bg-sky-100 text-sky-700' 
                : (scrolled ? 'bg-white text-sky-700 shadow-sm border border-gray-100' : 'bg-white/20 text-white backdrop-blur-sm')
            } mobile-toggle transition-all`}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu - Improved with smooth animations */}
        <div 
          className={`md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-8 pointer-events-none'
          }`}
        >
          <div className="bg-white rounded-lg shadow-xl p-6 m-4 mt-4 border border-gray-100 mobile-menu">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`p-3 rounded-lg flex items-center ${
                      isActive 
                        ? 'bg-sky-50 text-sky-700 font-medium shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              <div className="py-3 mt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={() => setIsOpen(false)}
                >
                  Request a Quote
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-sky-700 py-3 mt-1 bg-sky-50 rounded-lg">
                <FaPhone className="w-4 h-4" />
                <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="font-medium">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;