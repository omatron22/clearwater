'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWater, FaClipboardCheck, FaRegClock, FaUserTie, FaPhone } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image - Replace with your actual pool image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/50 z-10" />
          {/* You'll add the actual image later */}
          <div className="w-full h-full bg-blue-700" /> 
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Crystal Clear Pools, Every Time
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 text-blue-50"
            >
              Professional pool maintenance services throughout Ventura County.
              We focus exclusively on maintenance so you can enjoy your pool worry-free.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-300 text-center"
              >
                Get a Free Quote
              </Link>
              <Link 
                href="/services" 
                className="bg-white hover:bg-blue-50 text-blue-600 py-3 px-8 rounded-md text-lg font-medium transition duration-300 text-center"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Why Choose Clear Water Pool Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus exclusively on pool maintenance, not repairs, to give you the best service possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                <FaWater className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Expertise</h3>
              <p className="text-gray-600">
                Our technicians are trained in the latest pool maintenance techniques and water chemistry.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                <FaClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Quality</h3>
              <p className="text-gray-600">
                We never cut corners and ensure every pool receives the thorough attention it deserves.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                <FaRegClock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Reliability</h3>
              <p className="text-gray-600">
                You can count on us to show up as scheduled and provide consistent service every time.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                <FaUserTie className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Personalized</h3>
              <p className="text-gray-600">
                Every pool is unique, so we customize our service to fit the specific needs of your pool.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus exclusively on pool maintenance to keep your pool in pristine condition year-round
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41,3a37.73,37.73,0,0,1,.29,8,.69.69,0,0,0,.38.65c1.13.54,4.11,1.95,5.44,2.79.7.45.68,1,.68,1.78V22.1c0,.45.39.9,1,.9h6c.61,0,1-.45,1-.9V16.21a1.16,1.16,0,0,1,.09-.42c.14-.32.51-.63.91-1a16.38,16.38,0,0,0,1.45-1.29,3.5,3.5,0,0,0,.7-3A6.81,6.81,0,0,0,17,7.34c-1.28-1.61-2.57-2.9-3.18-3.57a1.39,1.39,0,0,0-1-.44c-1,0-4.65,0-4.71,0S6.21,3.38,5.15,3.44A27.3,27.3,0,0,1,1.41,3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Weekly Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Regular pool cleaning and chemical balancing to keep your water pristine and healthy.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20c4,0,8.5-2,11-7.25L19,13V4L17,6Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Seasonal Service</h3>
                <p className="text-gray-600 mb-4">
                  Special treatments for season changes, including opening and closing services.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">One-Time Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for getting your pool back in shape after neglect or before a special event.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-300 inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">See The Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our results speak for themselves. Here&apos;s what we can do for your pool.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xl font-bold">BEFORE</span>
              </div>
              {/* You'll add the actual image later */}
              <div className="w-full h-full bg-gray-400" />
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-xl font-bold">AFTER</span>
              </div>
              {/* You'll add the actual image later */}
              <div className="w-full h-full bg-blue-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <svg className="text-blue-200 w-10 h-10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 mb-4 italic">
                &quot;Clear Water Pool Service is the best maintenance company I&apos;ve used. My pool has never looked better!&quot;
              </p>
              <div className="font-bold text-blue-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">Ventura</div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <svg className="text-blue-200 w-10 h-10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 mb-4 italic">
                &quot;Finally found a reliable pool service that shows up when they say they will. Very professional and thorough.&quot;
              </p>
              <div className="font-bold text-blue-900">Michael Rodriguez</div>
              <div className="text-sm text-gray-500">Oxnard</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Crystal Clear Pool?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free quote and join our satisfied customers throughout Ventura County.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white hover:bg-blue-50 text-blue-600 py-3 px-8 rounded-md text-lg font-medium transition duration-300 text-center"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:8057663299"
                className="border border-white hover:bg-white/10 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-300 flex items-center justify-center gap-2"
              >
                <FaPhone /> (805) 766-3299
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}