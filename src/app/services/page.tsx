'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import Container from '@/components/Container';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import ResponsiveImage from '@/components/ResponsiveImage';
import CallToAction from '@/components/CallToAction';
import { services } from '@/utils/config';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section using the HeroSection component */}
      <HeroSection
        title="Our Services"
        subtitle="Professional pool maintenance focused on keeping your water crystal clear"
        imageCategory="hero"
      />

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <ResponsiveImage
                  src="/images/pools/weekly-maintenance.jpg"
                  alt="Weekly pool maintenance"
                  category="maintenance"
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
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41,3a37.73,37.73,0,0,1,.29,8,.69.69,0,0,0,.38.65c1.13.54,4.11,1.95,5.44,2.79.7.45.68,1,.68,1.78V22.1c0,.45.39.9,1,.9h6c.61,0,1-.45,1-.9V16.21a1.16,1.16,0,0,1,.09-.42c.14-.32.51-.63.91-1a16.38,16.38,0,0,0,1.45-1.29,3.5,3.5,0,0,0,.7-3A6.81,6.81,0,0,0,17,7.34c-1.28-1.61-2.57-2.9-3.18-3.57a1.39,1.39,0,0,0-1-.44c-1,0-4.65,0-4.71,0S6.21,3.38,5.15,3.44A27.3,27.3,0,0,1,1.41,3m4.53,1.23c.23,0,1.39.08,3,.08,1.36,0,3.43-.07,3.69-.07a.93.93,0,0,1,.7.28c.59.64,1.85,1.9,3.08,3.45a6.09,6.09,0,0,1,1.93,2.43,2.66,2.66,0,0,1-.5,2.28c-.2.24-.77.79-1.38,1.21-.46.33-1,.74-1.17,1.19a2,2,0,0,0-.14.74V22H9.2V16.21c0-1-.18-1.84-1.14-2.44-1.35-.85-4.19-2.19-5.39-2.77-.12-1.88-.2-4.86-.17-7.76a25.67,25.67,0,0,0,3.44.22" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">{services.regular.title}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {services.regular.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {services.regular.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
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
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20c4,0,8.5-2,11-7.25L19,13V4L17,6Z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">{services.seasonal.title}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {services.seasonal.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {services.seasonal.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
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
                <ResponsiveImage
                  src="/images/pools/seasonal-service.jpg"
                  alt="Seasonal pool service"
                  category="seasonal"
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
                <ResponsiveImage
                  src="/images/pools/one-time-cleaning.jpg"
                  alt="One-time pool cleaning"
                  category="maintenance"
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
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">{services.oneTime.title}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {services.oneTime.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {services.oneTime.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-center transition duration-300 inline-block"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-blue-50">
        <Container>
          <SectionHeader
            title="Additional Services"
            subtitle="While we focus on maintenance rather than repairs, we offer these additional services to keep your pool in top condition"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M7.5,13.5L9,12L11,14L15.5,9.5L17,11L11,17L7.5,13.5Z" />
                </svg>
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
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />
                </svg>
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
        </Container>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready to Experience Hassle-Free Pool Maintenance?"
        subtitle="Contact us today for a free quote and join our satisfied customers throughout Ventura County."
        buttonText="Get Your Free Quote"
        buttonLink="/contact"
      />
    </>
  );
}