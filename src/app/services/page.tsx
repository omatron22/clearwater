'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaWater, FaLeaf, FaCalendarAlt, FaClipboardCheck, FaChartLine, FaCheck } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-blue-900">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Professional pool maintenance focused on keeping your water crystal clear
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: '70px' }}
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/pools/weekly-maintenance.jpg"
                  alt="Weekly pool maintenance"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="text-blue-600 mb-4">
                <FaWater className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Regular Maintenance</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our core service is regular weekly maintenance that keeps your pool in perfect condition year-round. 
                We handle all the essential tasks to ensure your pool water stays balanced, clean, and safe for swimming.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Water testing &amp; chemical balancing</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Skimming surface debris</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Vacuuming pool floor</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Cleaning waterline tiles</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Emptying skimmer and pump baskets</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Checking equipment operation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Brushing walls and steps</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Filter cleaning as needed</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-center transition duration-300 inline-block"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center order-2 lg:order-1"
            >
              <div className="text-blue-600 mb-4">
                <FaLeaf className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Seasonal Service</h2>
              <p className="text-lg text-gray-600 mb-6">
                As the seasons change, your pool requires different types of care. Our seasonal services ensure your pool 
                transitions smoothly between seasons and addresses the unique challenges each season brings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Spring opening services</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Fall/winter preparation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Algae prevention treatments</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Leaf removal (fall)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>UV protection (summer)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Winterizing equipment</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-center transition duration-300 inline-block"
              >
                Get a Quote
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/pools/seasonal-service.jpg"
                  alt="Seasonal pool service"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/pools/one-time-cleaning.jpg"
                  alt="One-time pool cleaning"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="text-blue-600 mb-4">
                <FaCalendarAlt className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">One-Time Cleanings</h2>
              <p className="text-lg text-gray-600 mb-6">
                Need a quick refresh or preparing for a special event? Our one-time cleaning services provide 
                the boost your pool needs without a long-term commitment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Green-to-clean service</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Pre-party pool preparation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>After-storm cleanup</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Deep cleaning</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Filter deep clean</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Tile and surface cleaning</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-center transition duration-300 inline-block"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While we focus on maintenance rather than repairs, we offer these additional services to keep your pool in top condition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-blue-600 mb-4">
                <FaClipboardCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Pool Inspections</h3>
              <p className="text-gray-600">
                Comprehensive inspections to identify potential issues before they become problems.
                We check equipment, surfaces, and water chemistry to ensure everything is working properly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-blue-600 mb-4">
                <FaChartLine className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Water Analysis</h3>
              <p className="text-gray-600">
                Detailed water testing beyond the standard chemical checks. We analyze for 
                metals, phosphates, and other elements that can affect water quality and equipment longevity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Maintenance Consultation</h3>
              <p className="text-gray-600">
                Advice and education on how to maintain your pool between our visits. 
                We&apos;ll show you simple steps you can take to keep your pool in great shape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Hassle-Free Pool Maintenance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and join our satisfied customers throughout Ventura County.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-8 rounded-md text-lg transition duration-300"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}