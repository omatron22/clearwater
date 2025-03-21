import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Clear Water Pool Service</h3>
            <p className="mb-4">
              Professional pool maintenance services in Ventura County. We keep your pool crystal clear so you can enjoy it worry-free.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-400 transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone />
                <span>(805) 415-6242</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope />
                <span>clearwater3317@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt />
                <span>Serving all of Ventura County</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Clear Water Pool Service. All rights reserved.</p>
          <p className="text-sm mt-2">Owner: Roman Espinoza</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;