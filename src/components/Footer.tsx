// src/components/Footer.tsx
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Clear Water Pool Service</h3>
            <p className="mb-4 text-blue-100">
              Professional pool maintenance services in Ventura County. We keep your pool crystal clear so you can enjoy it worry-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-blue-100 hover:text-white transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4" />
                <a href="tel:8054156242" className="hover:text-white transition-colors">
                  (805) 415-6242
                </a>
              </div>
              <div className="flex items-center space-x-3">
  <FaEnvelope className="w-4 h-4" />
  <Link 
    href="/contact" 
    className="hover:text-white transition-colors"
  >
    Request a Quote
  </Link>
</div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 mt-1" />
                <span>Serving all of Ventura County</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-blue-200">
          <p>&copy; {currentYear} Clear Water Pool Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;