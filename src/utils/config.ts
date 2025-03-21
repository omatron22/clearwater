// src/utils/config.ts

/**
 * Centralized configuration utility for the application
 * This allows for easier management of feature flags and configuration values
 */

// Image configuration
export const imageConfig = {
    // Set to true to use placeholder images instead of actual images
    // In production, this should be set to false
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
  
  // Layout configuration
  export const layoutConfig = {
    // Container max width styles
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    
    // Breakpoints for responsive design
    breakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  };
  
  // Contact information - centralized for easy updates
  export const contactInfo = {
    phone: '(805) 415-6242',
    email: 'clearwater3317@yahoo.com',
    serviceArea: 'Ventura County, CA',
    availableHours: 'Mon-Fri, 8am-6pm',
    socialMedia: {
      facebook: 'https://facebook.com', // Update with actual URL
      instagram: 'https://instagram.com', // Update with actual URL
    },
  };
  
  // Company information
  export const companyInfo = {
    name: 'Clear Water Pool Service',
    owner: 'Roman Espinoza',
    tagline: 'Crystal Clear Pools, Every Time',
    description: 'Professional pool maintenance services in Ventura County',
    foundingYear: 2015, // Update with actual year
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
  
  /**
   * Helper function to check if the app is running in development mode
   */
  export const isDevelopment = () => {
    return process.env.NODE_ENV === 'development';
  };
  
  /**
   * Helper function to check if the app is running in production mode
   */
  export const isProduction = () => {
    return process.env.NODE_ENV === 'production';
  };
  
  export default {
    imageConfig,
    layoutConfig,
    contactInfo,
    companyInfo,
    serviceAreas,
    isDevelopment,
    isProduction,
  };