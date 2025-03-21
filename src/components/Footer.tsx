// src/components/Footer.tsx
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import Container from './Container';
import { contactInfo, companyInfo } from '@/utils/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-sky-900 to-blue-950 text-white">
      <svg className="w-full text-white" viewBox="0 0 1440 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1440V0C1440 0 1320 48 720 48C120 48 0 0 0 0V48Z" fill="currentColor"/>
      </svg>
      
      <Container className="py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold mb-5 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">{companyInfo.name}</h3>
            <p className="mb-6 text-blue-100 leading-relaxed">
              {companyInfo.description}. We keep your pool crystal clear so you can enjoy it worry-free.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href={contactInfo.socialMedia.facebook}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full hover:bg-sky-500 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href={contactInfo.socialMedia.instagram}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full hover:bg-sky-500 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-blue-100 hover:text-white transition-all duration-300 inline-block py-1.5 hover:translate-x-1"
                  >
                    <span className="inline-flex items-center">
                      <span className="mr-1.5 text-xs">→</span> {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Contact Information</h3>
            <div className="space-y-4 text-blue-100">
              <div className="flex items-center space-x-3 group">
                <div className="bg-sky-700/30 p-2.5 rounded-full group-hover:bg-sky-600 transition-colors">
                  <FaPhone className="w-4 h-4 text-sky-100" />
                </div>
                <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-sky-700/30 p-2.5 rounded-full group-hover:bg-sky-600 transition-colors">
                  <FaEnvelope className="w-4 h-4 text-sky-100" />
                </div>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-sky-700/30 p-2.5 rounded-full mt-0.5 group-hover:bg-sky-600 transition-colors">
                  <FaMapMarkerAlt className="w-4 h-4 text-sky-100" />
                </div>
                <span>Serving all of {contactInfo.serviceArea}</span>
              </div>
              <div className="bg-sky-800/20 px-4 py-3 rounded-lg mt-4">
                <p className="text-sm">{contactInfo.availableHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-800/50 mt-10 pt-8 text-center text-blue-200">
          <p className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <span>&copy; {currentYear} {companyInfo.name}. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span>Owner: {companyInfo.owner}</span>
          </p>
          <div className="mt-4 text-sm text-blue-300/60">
            <p>Professional Pool Maintenance Throughout Ventura County</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;