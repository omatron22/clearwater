'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: 'before-after' | 'maintenance' | 'seasonal';
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/images/pools/before-after-1.jpg',
      alt: 'Before and after pool cleaning',
      category: 'before-after',
    },
    {
      id: 2,
      src: '/images/pools/before-after-2.jpg',
      alt: 'Green pool transformation',
      category: 'before-after',
    },
    {
      id: 3,
      src: '/images/pools/before-after-3.jpg',
      alt: 'Algae removal before and after',
      category: 'before-after',
    },
    {
      id: 4,
      src: '/images/pools/maintenance-1.jpg',
      alt: 'Regular pool maintenance',
      category: 'maintenance',
    },
    {
      id: 5,
      src: '/images/pools/maintenance-2.jpg',
      alt: 'Chemical balancing',
      category: 'maintenance',
    },
    {
      id: 6,
      src: '/images/pools/maintenance-3.jpg',
      alt: 'Pool skimming',
      category: 'maintenance',
    },
    {
      id: 7,
      src: '/images/pools/seasonal-1.jpg',
      alt: 'Spring pool opening',
      category: 'seasonal',
    },
    {
      id: 8,
      src: '/images/pools/seasonal-2.jpg',
      alt: 'Fall pool winterizing',
      category: 'seasonal',
    },
    {
      id: 9,
      src: '/images/pools/seasonal-3.jpg',
      alt: 'Summer pool maintenance',
      category: 'seasonal',
    },
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-blue-900">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto">
              See the Clear Water difference in these before and after transformations
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

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeFilter === 'before-after'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveFilter('before-after')}
            >
              Before &amp; After
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeFilter === 'maintenance'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveFilter('maintenance')}
            >
              Maintenance
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeFilter === 'seasonal'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveFilter('seasonal')}
            >
              Seasonal Services
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden bg-white rounded-lg shadow-lg"
              >
                <div className="relative h-64 md:h-72">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-700">{image.alt}</p>
                  <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                    {image.category === 'before-after' && 'Before & After'}
                    {image.category === 'maintenance' && 'Maintenance'}
                    {image.category === 'seasonal' && 'Seasonal Service'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Dramatic Transformations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the difference our service makes in these side-by-side comparisons
            </p>
          </div>

          <div className="space-y-16">
            {/* Transformation 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-72 md:h-96">
                  <Image
                    src="/images/pools/before1.jpg"
                    alt="Green pool before cleaning"
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
                    This pool had been neglected for months, resulting in green water and algae growth.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-72 md:h-96">
                  <Image
                    src="/images/pools/after1.jpg"
                    alt="Clean pool after service"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white py-1 px-4 rounded-md">
                    After
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Crystal Clear Restoration</h3>
                  <p className="text-gray-600">
                    After just three days of our green-to-clean service, the pool was completely transformed.
                  </p>
                </div>
              </div>
            </div>

            {/* Transformation 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-72 md:h-96">
                  <Image
                    src="/images/pools/before2.jpg"
                    alt="Dirty tile line before cleaning"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white py-1 px-4 rounded-md">
                    Before
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Calcium Buildup</h3>
                  <p className="text-gray-600">
                    Severe calcium scaling on the waterline tiles detracted from this pool&apos;s appearance.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-72 md:h-96">
                  <Image
                    src="/images/pools/after2.jpg"
                    alt="Clean tile line after service"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white py-1 px-4 rounded-md">
                    After
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Sparkling Tiles</h3>
                  <p className="text-gray-600">
                    Our specialized tile cleaning service restored the beauty of this pool&apos;s waterline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Own Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and see what Clear Water Pool Service can do for your pool.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-8 rounded-md text-lg transition duration-300"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </>
  );
}