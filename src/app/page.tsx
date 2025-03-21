'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaWater, FaLeaf, FaCalendarAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pools/hero.jpg"
            alt="Beautiful swimming pool"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 relative text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Crystal Clear Pools, Every Time
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional pool maintenance services in Ventura County
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-center transition duration-300"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-md backdrop-blur-sm text-center transition duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus exclusively on pool maintenance to keep your pool in pristine condition year-round
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 mb-4">
                <FaWater className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Regular Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Weekly cleaning, chemical balancing, and equipment checks to keep your pool sparkling clean.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Water testing &amp; balancing</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Skimming &amp; vacuuming</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Filter cleaning</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
              >
                Learn more →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 mb-4">
                <FaLeaf className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Seasonal Service</h3>
              <p className="text-gray-600 mb-4">
                Specialized care during different seasons to address unique seasonal challenges.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Spring openings</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Fall winterizing</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Algae prevention</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
              >
                Learn more →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 mb-4">
                <FaCalendarAlt className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">One-Time Cleanings</h3>
              <p className="text-gray-600 mb-4">
                Perfect for getting your pool ready for a special event or recovering from a period of neglect.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Deep cleaning</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Green-to-clean service</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Pre-event preparation</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
              >
                Learn more →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">See The Difference</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our results speak for themselves. Check out these dramatic transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-96">
                <Image
                  src="/images/pools/before1.jpg"
                  alt="Pool before service"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white py-1 px-4 rounded-md">
                  Before
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Neglected Pool</h3>
                <p className="text-gray-600">
                  Green water, algae growth, and debris throughout the pool.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-96">
                <Image
                  src="/images/pools/after1.jpg"
                  alt="Pool after service"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white py-1 px-4 rounded-md">
                  After
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Restored Beauty</h3>
                <p className="text-gray-600">
                  Crystal clear water, properly balanced chemicals, and sparkling surfaces.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-center transition duration-300"
            >
              View More Before &amp; After
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from satisfied pool owners throughout Ventura County
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
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Roman has been maintaining our pool for over a year, and we couldn&apos;t be happier. The water is always perfect, and he&apos;s incredibly reliable. Professional service from start to finish!&quot;
              </p>
              <div>
                <p className="font-bold text-blue-900">Sarah Johnson</p>
                <p className="text-gray-500">Thousand Oaks</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;After struggling with several other pool services, we found Clear Water Pool Service. The difference was immediate. Our pool has never looked better, and their prices are fair.&quot;
              </p>
              <div>
                <p className="font-bold text-blue-900">Michael Rodriguez</p>
                <p className="text-gray-500">Oxnard</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;I can&apos;t say enough good things about Clear Water. They took my green, algae-filled disaster and turned it into a beautiful oasis in just a few days. Now they keep it pristine every week.&quot;
              </p>
              <div>
                <p className="font-bold text-blue-900">Jennifer Williams</p>
                <p className="text-gray-500">Camarillo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Crystal Clear Water?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and start enjoying your pool without the hassle of maintenance.
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