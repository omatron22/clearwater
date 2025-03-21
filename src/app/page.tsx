'use client';

import HeroSection from '@/components/HeroSection';
import Container from '@/components/Container';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import BeforeAfterComparison from '@/components/BeforeAfterComparison';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { services, testimonials, beforeAfterExamples } from '@/utils/config';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSwimmingPool, FaClock, FaUserTie } from 'react-icons/fa';

export default function Home() {
  // Get the first before/after example
  const beforeAfterExample = beforeAfterExamples[0];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Crystal Clear Pools, Every Time"
        subtitle="Professional pool maintenance services in Ventura County"
        imageCategory="hero"
        height="min-h-screen"
        textAlign="left"
        titleSize="text-5xl md:text-6xl lg:text-7xl"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
          >
            Request a Quote
          </Button>
          <Button
            href="/services"
            variant="white"
            size="lg"
          >
            View Services
          </Button>
        </div>
      </HeroSection>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-sky-50">
        <Container>
          <SectionHeader
            title="Why Choose Us"
            subtitle="Clear Water Pool Service is dedicated to making your pool maintenance worry-free"
            centered={true}
            withLine={true}
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <Card animate padding="p-8" className="text-center group hover-card-effect">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-200 transition-colors">
                <FaShieldAlt className="text-sky-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-sky-900">Expertise</h3>
              <p className="text-gray-600">
                Our technicians are trained in the latest pool maintenance techniques and water chemistry.
              </p>
            </Card>

            <Card animate delay={0.2} padding="p-8" className="text-center group hover-card-effect">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-200 transition-colors">
                <FaSwimmingPool className="text-sky-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-sky-900">Quality</h3>
              <p className="text-gray-600">
                We never cut corners and ensure every pool receives the thorough attention it deserves.
              </p>
            </Card>

            <Card animate delay={0.4} padding="p-8" className="text-center group hover-card-effect">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-200 transition-colors">
                <FaClock className="text-sky-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-sky-900">Reliability</h3>
              <p className="text-gray-600">
                You can count on us to show up as scheduled and provide consistent service every time.
              </p>
            </Card>

            <Card animate delay={0.6} padding="p-8" className="text-center group hover-card-effect">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-200 transition-colors">
                <FaUserTie className="text-sky-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-sky-900">Personalized</h3>
              <p className="text-gray-600">
                Every pool is unique, so we customize our service to fit the specific needs of your pool.
              </p>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-100 rounded-full opacity-70"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-100 rounded-full opacity-50"></div>

        <Container className="relative z-10">
          <SectionHeader
            title="Our Services"
            subtitle="We focus exclusively on pool maintenance to keep your pool in pristine condition year-round"
            centered={true}
            withLine={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title={services.regular.title}
              description={services.regular.description}
              icon="FaWater"
              features={services.regular.features.slice(0, 4)}
              delay={0}
            />
            
            <ServiceCard
              title={services.seasonal.title}
              description={services.seasonal.description}
              icon="FaLeaf"
              features={services.seasonal.features.slice(0, 4)}
              delay={0.2}
            />
            
            <ServiceCard
              title={services.oneTime.title}
              description={services.oneTime.description}
              icon="FaCalendarAlt"
              features={services.oneTime.features.slice(0, 4)}
              delay={0.4}
            />
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <SectionHeader
            title="See The Difference"
            subtitle="Our results speak for themselves. Check out these dramatic transformations."
            centered={true}
            withLine={true}
            eyebrow="TRANSFORMATIONS"
          />

          <div className="relative">
            <BeforeAfterComparison
              beforeImage={beforeAfterExample.beforeImage}
              afterImage={beforeAfterExample.afterImage}
              className="mb-12"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-sky-200 rounded-tl-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-sky-200 rounded-br-lg"></div>
          </div>

          <div className="text-center mt-16">
            <Button
              href="/gallery"
              variant="primary"
              size="lg"
              rightIcon={<span>→</span>}
            >
              View More Before &amp; After
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <Container>
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Hear from satisfied pool owners throughout Ventura County"
            centered={true}
            withLine={true}
            withAccent={true}
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
      <section className="py-20 md:py-28 bg-gradient-to-r from-sky-800 to-blue-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-500 rounded-full"></div>
          <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-blue-500 rounded-full"></div>
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-sm">Ready for Crystal Clear Water?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Contact us today for a free quote and start enjoying your pool without the hassle of maintenance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Button 
                  href="/contact" 
                  variant="white" 
                  size="lg"
                >
                  Get Your Free Quote
                </Button>
                <Button 
                  href="/gallery" 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/20"
                >
                  View Our Gallery
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}