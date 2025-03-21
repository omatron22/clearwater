'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import Container from '@/components/Container';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import BeforeAfterComparison from '@/components/BeforeAfterComparison';
import CallToAction from '@/components/CallToAction';
import SectionHeader from '@/components/SectionHeader';
import { services, testimonials, beforeAfterExamples } from '@/utils/config';

export default function Home() {
  // Get the first before/after example
  const beforeAfterExample = beforeAfterExamples[0];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Crystal Clear Pools, Every Time"
        subtitle="Professional pool maintenance services in Ventura County"
        imageCategory="hero"
        height="min-h-screen"
        textAlign="left"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
      </HeroSection>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <SectionHeader
            title="Our Services"
            subtitle="We focus exclusively on pool maintenance to keep your pool in pristine condition year-round"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              title={services.regular.title}
              description={services.regular.description}
              icon="FaWater"
              features={services.regular.features.slice(0, 3)}
              delay={0}
            />
            
            <ServiceCard
              title={services.seasonal.title}
              description={services.seasonal.description}
              icon="FaLeaf"
              features={services.seasonal.features.slice(0, 3)}
              delay={0.2}
            />
            
            <ServiceCard
              title={services.oneTime.title}
              description={services.oneTime.description}
              icon="FaCalendarAlt"
              features={services.oneTime.features.slice(0, 3)}
              delay={0.4}
            />
          </div>
        </Container>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader
            title="See The Difference"
            subtitle="Our results speak for themselves. Check out these dramatic transformations."
            centered={true}
          />

          <BeforeAfterComparison
            beforeImage={beforeAfterExample.beforeImage}
            afterImage={beforeAfterExample.afterImage}
            className="mb-12"
          />

          <div className="text-center">
            <Link
              href="/gallery"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-center transition duration-300 inline-block"
            >
              View More Before &amp; After
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-blue-50">
        <Container>
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Hear from satisfied pool owners throughout Ventura County"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                rating={testimonial.rating}
                delay={index * 0.2}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready for Crystal Clear Water?"
        subtitle="Contact us today for a free quote and start enjoying your pool without the hassle of maintenance."
        buttonText="Get Your Free Quote"
        buttonLink="/contact"
      />
    </>
  );
}