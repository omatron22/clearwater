'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSwimmingPool, FaWater, FaLeaf, FaHandshake } from 'react-icons/fa';
import Container from '@/components/Container';
import SectionHeader from '@/components/SectionHeader';
import ResponsiveImage from '@/components/ResponsiveImage';
import HeroSection from '@/components/HeroSection';
import { serviceAreas } from '@/utils/config';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About Us"
        subtitle="Meet the team behind Clear Water Pool Service"
        imageCategory="hero"
      />

      {/* About Content */}
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
                  src="/images/pools/team/owner.jpg"
                  alt="Roman Espinoza, Owner of Clear Water Pool Service"
                  category="team"
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
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Clear Water Pool Service was founded by Roman Espinoza with a simple mission: to provide exceptional pool maintenance 
                services that allow pool owners to enjoy their pools without the hassle of upkeep.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                After years of working in the pool industry, Roman noticed that many pool service companies were taking 
                on too many clients and not providing the personalized attention each pool deserves. He also saw that 
                many companies were trying to do both maintenance and repairs, often without the proper licensing for repair work.
              </p>
              <p className="text-lg text-gray-600">
                That&apos;s why Clear Water Pool Service focuses exclusively on maintenance. We do what we do best - keeping 
                your pool water crystal clear, properly balanced, and ready for you to enjoy. By specializing in maintenance, 
                we can provide a higher level of service at a better value for our clients throughout Ventura County.
              </p>
            </motion.div>
          </div>

          {/* Our Values */}
          <div className="py-16">
            <SectionHeader
              title="Our Values"
              subtitle="The principles that guide everything we do"
              centered={true}
            />

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
          
          {/* Service Area */}
          <div className="py-16">
            <SectionHeader
              title="Our Service Area"
              subtitle="Clear Water Pool Service proudly serves pool owners throughout Ventura County"
              centered={true}
            />
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-96">
                <ResponsiveImage
                  src="/images/pools/misc/ventura-county-map.jpg"
                  alt="Ventura County service area map"
                  category="map"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Areas We Serve:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Simple grid layout for service areas */}
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="col-span-1">
                      <ul className="space-y-2">
                        <li>• {area}</li>
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-gray-600">
                  Not sure if we service your area? Contact us and we&apos;ll be happy to let you know!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-50">
        <Container>
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
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <Container>
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
        </Container>
      </section>
    </>
  );
}