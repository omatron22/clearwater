// src/app/gallery/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Container from '@/components/Container';
import SectionHeader from '@/components/SectionHeader';
import ResponsiveImage from '@/components/ResponsiveImage';
import CallToAction from '@/components/CallToAction';
import BeforeAfterComparison from '@/components/BeforeAfterComparison';
import { beforeAfterExamples } from '@/utils/config';

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
      src: '/images/pools/before-after/before-after1.jpg',
      alt: 'Before and after pool cleaning',
      category: 'before-after',
    },
    {
      id: 2,
      src: '/images/pools/before-after/before-after2.jpg',
      alt: 'Green pool transformation',
      category: 'before-after',
    },
    {
      id: 3,
      src: '/images/pools/before-after/before-after3.jpg',
      alt: 'Algae removal before and after',
      category: 'before-after',
    },
    {
      id: 4,
      src: '/images/pools/maintenance/maint1.jpg',
      alt: 'Regular pool maintenance',
      category: 'maintenance',
    },
    {
      id: 5,
      src: '/images/pools/maintenance/maint2.jpg',
      alt: 'Chemical balancing',
      category: 'maintenance',
    },
    {
      id: 6,
      src: '/images/pools/maintenance/maint3.jpg',
      alt: 'Pool skimming',
      category: 'maintenance',
    },
    {
      id: 7,
      src: '/images/pools/seasonal/seasonal1.jpg',
      alt: 'Spring pool opening',
      category: 'seasonal',
    },
    {
      id: 8,
      src: '/images/pools/seasonal/seasonal2.jpg',
      alt: 'Fall pool winterizing',
      category: 'seasonal',
    },
    {
      id: 9,
      src: '/images/pools/seasonal/seasonal3.jpg',
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
      <HeroSection
        title="Our Gallery"
        subtitle="See the Clear Water difference in these before and after transformations"
        imageCategory="pool"
      />

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <Container>
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
                className="relative overflow-hidden bg-white rounded-lg shadow-lg h-full"
              >
                <div className="relative h-64 md:h-72">
                  <ResponsiveImage
                    src={image.src}
                    alt={image.alt}
                    category={image.category}
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
        </Container>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 bg-blue-50">
        <Container>
          <SectionHeader
            title="Dramatic Transformations"
            subtitle="See the difference our service makes in these side-by-side comparisons"
            centered={true}
          />

          <div className="space-y-16">
            {/* Use the BeforeAfterComparison Component for consistency */}
            {beforeAfterExamples.map((example) => (
              <BeforeAfterComparison
                key={example.id}
                beforeImage={example.beforeImage}
                afterImage={example.afterImage}
                className="mb-8"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready for Your Own Transformation?"
        subtitle="Contact us today for a free quote and see what Clear Water Pool Service can do for your pool."
        buttonText="Get Your Free Quote"
        buttonLink="/contact"
      />
    </>
  );
}