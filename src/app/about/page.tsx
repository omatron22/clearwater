'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSwimmingPool, FaWater, FaLeaf, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/50 z-10" />
          {/* You'll add the actual image later */}
          <Image 
              src="/images/pool.JPG" 
              alt="Pool before our service" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />            
          </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Meet the team behind Clear Water Pool Service
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                    src="/images/dad2.jpeg" 
                    alt="Pool before our service" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover"
                />                 </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
  Clear Water Pool Service was started over 15 years ago by my dad, right here in Ventura County. 
  Built on years of hard work, early mornings, and a commitment to doing the job right. 
  He’s earned the trust of long-time clients who know they can always count on him to show up and take care of their pools with care and consistency.
</p>
<p className="text-lg text-gray-600 mb-6">
  Our goal has always been simple: take the stress out of pool care so you can actually enjoy your pool. 
  We focus on consistent, high-quality maintenance — keeping your water clean, balanced, and swim-ready all year long.
</p>
<p className="text-lg text-gray-600">
  I built this website as a small way to give back to my dad and support the business he’s poured so much into. 
  That’s a photo of me and my siblings up above — proud to be part of a family that believes in honest work 
  and doing things with care.
</p>

            </motion.div>
          </div>

          {/* Our Values */}
          <div className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 text-center h-full"
              >
                <div className="text-blue-600 mx-auto mb-4">
                  <FaSwimmingPool className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Expertise</h3>
                <p className="text-gray-600">
                  We stay up-to-date on the latest pool maintenance techniques and water chemistry to provide expert care for your pool.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 text-center h-full"
              >
                <div className="text-blue-600 mx-auto mb-4">
                  <FaWater className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Quality</h3>
                <p className="text-gray-600">
                  We never cut corners. Every pool we service receives the thorough attention and care it needs to look its best.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 text-center h-full"
              >
                <div className="text-blue-600 mx-auto mb-4">
                  <FaHandshake className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Reliability</h3>
                <p className="text-gray-600">
                  You can count on us to show up as scheduled and provide consistent service that keeps your pool in perfect condition.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 text-center h-full"
              >
                <div className="text-blue-600 mx-auto mb-4">
                  <FaLeaf className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Sustainability</h3>
                <p className="text-gray-600">
                  We use eco-friendly practices and products whenever possible to minimize environmental impact while maintaining pool health.
                </p>
              </motion.div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Our Mission</h2>
            <div className="text-xl text-gray-600 bg-white p-8 rounded-xl shadow-md relative">
              <svg className="text-blue-600 w-16 h-16 absolute -top-6 -left-6 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6">
                Our mission at Clear Water Pool Service is to provide exceptional pool maintenance that exceeds expectations. 
                We believe that every pool owner deserves to enjoy their pool without the stress and hassle of maintenance.
              </p>
              <p>
                We&apos;re committed to delivering personalized service, maintaining the highest standards of water quality, 
                and building lasting relationships with our clients through honesty, reliability, and expertise.
              </p>
              <svg className="text-blue-600 w-16 h-16 absolute -bottom-6 -right-6 opacity-20 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to experience the Clear Water difference? Contact us today for a free quote and join our family of satisfied customers.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-8 rounded-md text-lg transition duration-300 inline-block"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}