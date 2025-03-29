'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import VenturaCountyMap from '@/components/VenturaCountyMap';
import Image from 'next/image';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// Define proper types for form events
type FormInputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

export default function ContactPage() {
  // Initialize reCAPTCHA hook
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    serviceType: 'weekly',
    poolSize: 'small',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Add proper type annotation for the event parameter
  const handleChange = (e: FormInputEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add proper type annotation for the event parameter
  const handleSubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    
    // Validate reCAPTCHA is available
    if (!executeRecaptcha) {
      setErrorMessage('reCAPTCHA not available. Please try again later.');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Execute reCAPTCHA and get token
      const recaptchaToken = await executeRecaptcha('quote_request');
      
      // Send data to the API route with reCAPTCHA token
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken, // Include the token with the form data
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send your quote request');
      }
      
      // Success - show confirmation and reset form
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        serviceType: 'weekly',
        poolSize: 'small',
      });
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send your quote request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/50 z-10" />
            <Image 
              src="/images/pool.jpg" 
              alt="Pool before our service" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />            
          </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Request a quote or get in touch with any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                Get In Touch
              </h2>
              
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3 text-blue-600">
                      <FaPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">Phone</h3>
                      <p className="text-gray-600 mt-1">(805) 415-6242</p>
                      <p className="text-gray-500 text-sm mt-1">Available Monday-Friday, 9am-5pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3 text-blue-600">
                      <FaEnvelope className="w-6 h-6" />
                    </div>
                    <div>
                    <h3 className="text-xl font-bold text-blue-900">Request a Quote</h3>
                    <p className="text-gray-600 mt-1">Fill out our simple form</p>
                      <p className="text-gray-500 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3 text-blue-600">
                      <FaMapMarkerAlt className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">Service Area</h3>
                      <p className="text-gray-600 mt-1">Ventura County, CA</p>
                      <p className="text-gray-500 text-sm mt-1">Serving all communities in Ventura County</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Why Choose Clear Water Pool Service?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Specialized focus on full service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Locally owned and operated</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Personalized service tailored to your pool&apos;s needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Reliable weekly service you can count on</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote Request Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                Request a Quote
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-8 py-12 rounded-xl text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-lg mb-4">Your quote request has been submitted successfully.</p>
                  <p>We&apos;ll get back to you within 24 hours to discuss your pool maintenance needs.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  {errorMessage && (
                    <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                      <strong className="font-bold">Error: </strong>
                      <span className="block sm:inline">{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address *</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">Service Type *</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="weekly">Weekly Maintenance</option>
                        <option value="one-time">One-Time Cleaning</option>
                        <option value="seasonal">Seasonal Service</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="poolSize" className="block text-gray-700 font-medium mb-2">Pool Size *</label>
                      <select
                        id="poolSize"
                        name="poolSize"
                        value={formData.poolSize}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="small">Small (up to 10,000 gallons)</option>
                        <option value="medium">Medium (10,000-20,000 gallons)</option>
                        <option value="large">Large (20,000-40,000 gallons)</option>
                        <option value="xl">Extra Large (40,000+ gallons)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your pool, current issues, or any specific needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Quote'}
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    This site is protected by reCAPTCHA and the Google 
                    <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> and
                    <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> Terms of Service</a> apply.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Our Service Area
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proudly serving pool owners throughout Ventura County
            </p>
          </div>

          <div>
            <VenturaCountyMap />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our services? Find quick answers below
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">How often do you service my pool?</h3>
                <p className="text-gray-600">
                  We offer weekly maintenance services. For most pools in Ventura County, 
                  we recommend weekly service to maintain optimal water quality and cleanliness.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">What&apos;s included in your regular maintenance service?</h3>
                <p className="text-gray-600">
                  Our regular maintenance includes water testing and chemical balancing, skimming surface debris, 
                  vacuuming the pool floor, cleaning waterline tiles, emptying skimmer and pump baskets, 
                  checking equipment operation, and filter cleaning as needed.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Do I need to be home during service visits?</h3>
                <p className="text-gray-600">
                  No, you don&apos;t need to be home. As long as we have access to your pool area, 
                  we can perform our service while you&apos;re away. We&apos;ll leave a service report detailing what was done.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">What areas do you service?</h3>
                <p className="text-gray-600">
                  We service all of Ventura County, including Ventura, Oxnard, Camarillo, Thousand Oaks, 
                  Simi Valley, Moorpark, Ojai, and surrounding communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}