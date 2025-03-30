'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaWater, FaClipboardCheck, FaRegClock, FaUserTie, FaPhone, FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  // State to track current before/after image set
  const [currentImageSet, setCurrentImageSet] = useState(0);
  
  // Define the before/after image sets
  const beforeAfterSets = [
    { before: '/images/before2.JPG', after: '/images/after2.JPG' },
    { before: '/images/before.jpeg', after: '/images/after.jpeg' },
    { before: '/images/before3.jpeg', after: '/images/after3.jpeg' },
  ];
  
  // Navigation handlers
  const goToPrevious = () => {
    setCurrentImageSet((prev) => 
      prev === 0 ? beforeAfterSets.length - 1 : prev - 1
    );
  };
  
  const goToNext = () => {
    setCurrentImageSet((prev) => 
      prev === beforeAfterSets.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Hero Section with logo and emphasized buttons */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        {/* Background Image with darker overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/50 z-10" />
          <Image 
            src="/images/pool.jpg" 
            alt="Crystal clear pool water" 
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />        
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            {/* Logo Image - larger size */}
            <div className="mb-10 flex justify-center">
              <div className="w-full md:w-4/5 lg:w-3/4">
                <Image 
                  src="/images/logo.png" 
                  alt="Company Logo" 
                  width={800} 
                  height={400} 
                  className="h-auto w-full" 
                  priority
                />
              </div>
            </div>
            
            {/* Brief subheading */}
            <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto font-medium">
              Professional maintenance throughout Ventura County for 15+ years
            </p>
            
            {/* Larger, more prominent buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-10 rounded-md text-xl font-medium transition duration-300 text-center shadow-xl hover:scale-105"
              >
                Get a Free Quote
              </Link>
              <Link 
                href="/services" 
                className="bg-white hover:bg-blue-50 text-blue-600 py-4 px-10 rounded-md text-xl font-medium transition duration-300 text-center shadow-xl hover:scale-105"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Fixed Scroll Indicator with CSS animation */}
        <div className="absolute bottom-8 left-0 right-0 mx-auto text-white text-center z-20">
          <div
            className="cursor-pointer p-2 animate-bounce"
            onClick={() => {
              // This will scroll to the next section
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <FaChevronDown className="mx-auto text-xl" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Why Choose Clear Water Pool Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus exclusively on making sure your pool is clean, safe, and ready for you to enjoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <FaWater className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Expertise</h3>
              <p className="text-gray-600">
                We&apos;re trained in the latest pool maintenance techniques and water chemistry.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <FaClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Quality</h3>
              <p className="text-gray-600">
                We never cut corners and ensure every pool receives the thorough attention it deserves.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <FaRegClock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Reliability</h3>
              <p className="text-gray-600">
                You can count on us to show up as scheduled and provide consistent service every time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <FaUserTie className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Personalized</h3>
              <p className="text-gray-600">
                Every pool is unique, so we customize our service to fit the specific needs of your pool.
              </p>
            </div>
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

      {/* Before & After with Navigation Arrows */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">See The Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our results speak for themselves. Here&apos;s what we can do for your pool.
            </p>
          </div>

          <div className="flex items-center">
            {/* Left Arrow */}
            <button 
              onClick={goToPrevious}
              className="text-blue-600 hover:text-blue-800 p-2 mr-2 z-10 transition-transform duration-200 hover:scale-125"
              aria-label="Previous image set"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Before and After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                  <span className="text-white text-xl font-bold">BEFORE</span>
                </div>
                <Image 
                  src={beforeAfterSets[currentImageSet].before} 
                  alt="Pool before our service" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
              
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                  <span className="text-white text-xl font-bold">AFTER</span>
                </div>
                <Image 
                  src={beforeAfterSets[currentImageSet].after} 
                  alt="Pool after our service" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Right Arrow */}
            <button 
              onClick={goToNext}
              className="text-blue-600 hover:text-blue-800 p-2 ml-2 z-10 transition-transform duration-200 hover:scale-125"
              aria-label="Next image set"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Dots indicator (optional) */}
          <div className="flex justify-center mt-6">
            {beforeAfterSets.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageSet(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentImageSet ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to image set ${index + 1}`}
              />
            ))}
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
            <div className="bg-white p-8 rounded-lg shadow-md">
              <svg className="text-blue-200 w-10 h-10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 mb-4 italic">
                &quot;Clear Water Pool Service is the best maintenance company I&apos;ve used. My pool has never looked better!&quot;
              </p>
              <div className="font-bold text-blue-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">Ventura</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <svg className="text-blue-200 w-10 h-10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 mb-4 italic">
                &quot;Finally found a reliable pool service that shows up when they say they will. Very professional and thorough.&quot;
              </p>
              <div className="font-bold text-blue-900">Michael Rodriguez</div>
              <div className="text-sm text-gray-500">Oxnard</div>
            </div>
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
                href="tel:8054156242"
                className="border border-white hover:bg-white/10 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-300 flex items-center justify-center gap-2"
              >
                <FaPhone /> (805) 415-6242
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}