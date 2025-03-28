'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhone, FaTimes, FaWater } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  
  // Initialize with default values that work for SSR
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Set mounted state after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    // Initial state setup after mounting
    if (isHomepage) {
      setLogoVisible(window.scrollY > 100);
    }
  }, [isHomepage]);

  // Update scrolled state and logo visibility on scroll
  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      
      // Show logo if we're not on the homepage or if we've scrolled down
      if (isHomepage) {
        setLogoVisible(currentScrollY > 100);
      } else {
        setLogoVisible(true);
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage, mounted]);

  // Close mobile menu when route changes
  useEffect(() => {
    if (!mounted) return;
    setIsOpen(false);
  }, [pathname, mounted]);

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
          {/* Logo - with conditional visibility */}
          <Link href="/" className="relative z-20">
            <div className={`font-bold text-xl md:text-2xl transition-all duration-300 ${
              !mounted ? 'text-white' : // Default for SSR
              (scrolled || isOpen 
                ? 'text-blue-600' 
                : 'text-white')} ${
              !mounted ? '' : // Default for SSR
              (logoVisible 
                ? 'opacity-100' 
                : 'opacity-0 invisible')
            }`}
            >
              Clear Water <span className={
                !mounted ? 'text-white' : // Default for SSR
                (scrolled || isOpen 
                  ? 'text-blue-900' 
                  : 'text-white')
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
            {isOpen ? <FaTimes size={24} /> : <FaWater size={24} />}
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