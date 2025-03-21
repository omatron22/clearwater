// src/utils/config.ts

/**
 * Centralized configuration utility for the application
 * This allows for easier management of feature flags and configuration values
 */

// Image configuration
export const imageConfig = {
    // Set to true to use placeholder images instead of actual images
    // When you get real images, set this to false
    usePlaceholders: true,
  
    // Base path for images
    basePath: '/images/pools',
  
    // Directories for different image categories
    directories: {
      hero: 'hero',
      maintenance: 'maintenance',
      beforeAfter: 'before-after',
      seasonal: 'seasonal',
      testimonials: 'testimonials',
      team: 'team',
      map: 'misc',
    }
  };
  
  // Contact information - centralized for easy updates
  export const contactInfo = {
    phone: '(805) 415-6242',
    email: 'clearwater3317@yahoo.com',
    serviceArea: 'Ventura County, CA',
    availableHours: 'Mon-Fri, 8am-6pm',
    socialMedia: {
      facebook: 'https://facebook.com', // Update with actual URL when available
      instagram: 'https://instagram.com', // Update with actual URL when available
    },
  };
  
  // Company information
  export const companyInfo = {
    name: 'Clear Water Pool Service',
    owner: 'Roman Espinoza',
    tagline: 'Crystal Clear Pools, Every Time',
    description: 'Professional pool maintenance services in Ventura County',
    foundingYear: 2015, // Update with actual year when known
  };
  
  // Service areas
  export const serviceAreas = [
    'Ventura',
    'Oxnard',
    'Camarillo',
    'Thousand Oaks',
    'Simi Valley',
    'Moorpark',
    'Ojai',
    'Santa Paula',
    'Fillmore',
    'Port Hueneme',
    'Oak Park',
    'Newbury Park',
  ];
  
  // Services offered
  export const services = {
    regular: {
      title: 'Regular Maintenance',
      description: 'Weekly cleaning, chemical balancing, and equipment checks to keep your pool sparkling clean.',
      features: [
        'Water testing & chemical balancing',
        'Skimming & vacuuming',
        'Filter cleaning',
        'Emptying skimmer and pump baskets',
        'Checking equipment operation',
        'Brushing walls and steps'
      ]
    },
    seasonal: {
      title: 'Seasonal Service',
      description: 'Specialized care during different seasons to address unique seasonal challenges.',
      features: [
        'Spring openings',
        'Fall winterizing',
        'Algae prevention',
        'Leaf removal (fall)',
        'UV protection (summer)',
        'Winterizing equipment'
      ]
    },
    oneTime: {
      title: 'One-Time Cleanings',
      description: 'Perfect for getting your pool ready for a special event or recovering from a period of neglect.',
      features: [
        'Deep cleaning',
        'Green-to-clean service',
        'Pre-event preparation',
        'After-storm cleanup',
        'Filter deep clean',
        'Tile and surface cleaning'
      ]
    }
  };
  
  // Testimonials from clients
  export const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Thousand Oaks',
      quote: 'Roman has been maintaining our pool for over a year, and we couldn\'t be happier. The water is always perfect, and he\'s incredibly reliable. Professional service from start to finish!',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      location: 'Oxnard',
      quote: 'After struggling with several other pool services, we found Clear Water Pool Service. The difference was immediate. Our pool has never looked better, and their prices are fair.',
      rating: 5
    },
    {
      name: 'Jennifer Williams',
      location: 'Camarillo',
      quote: 'I can\'t say enough good things about Clear Water. They took my green, algae-filled disaster and turned it into a beautiful oasis in just a few days. Now they keep it pristine every week.',
      rating: 5
    }
  ];
  
  // Before and After examples
  export const beforeAfterExamples = [
    {
      id: 1,
      beforeImage: {
        src: '/images/pools/before-after/before1.jpg',
        alt: 'Green pool before cleaning',
        title: 'Neglected Pool',
        description: 'This pool had been neglected for months, resulting in green water and algae growth.'
      },
      afterImage: {
        src: '/images/pools/before-after/after1.jpg',
        alt: 'Clean pool after service',
        title: 'Crystal Clear Restoration',
        description: 'After just three days of our green-to-clean service, the pool was completely transformed.'
      }
    },
    {
      id: 2,
      beforeImage: {
        src: '/images/pools/before-after/before2.jpg',
        alt: 'Dirty tile line before cleaning',
        title: 'Calcium Buildup',
        description: 'Severe calcium scaling on the waterline tiles detracted from this pool\'s appearance.'
      },
      afterImage: {
        src: '/images/pools/before-after/after2.jpg',
        alt: 'Clean tile line after service',
        title: 'Sparkling Tiles',
        description: 'Our specialized tile cleaning service restored the beauty of this pool\'s waterline.'
      }
    }
  ];
  
  export default {
    imageConfig,
    contactInfo,
    companyInfo,
    serviceAreas,
    services,
    testimonials
  };