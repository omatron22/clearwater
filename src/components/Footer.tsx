// src/components/Footer.tsx
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import Container from './Container';
import { contactInfo, companyInfo } from '@/utils/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">{companyInfo.name}</h3>
            <p className="mb-4 text-blue-100">
              {companyInfo.description}. We keep your pool crystal clear so you can enjoy it worry-free.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href={contactInfo.socialMedia.facebook}
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-300 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href={contactInfo.socialMedia.instagram}
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-100 hover:text-white transition duration-300 inline-block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-3">
                <FaPhone className="flex-shrink-0 text-blue-300" />
                <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="flex-shrink-0 text-blue-300" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="flex-shrink-0 mt-1 text-blue-300" />
                <span>Serving all of {contactInfo.serviceArea}</span>
              </div>
              <div className="text-sm mt-2">
                <p>{contactInfo.availableHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
          <p className="text-sm mt-2">Owner: {companyInfo.owner}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;