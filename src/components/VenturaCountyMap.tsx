'use client';

import { useEffect, useRef, useState, ReactElement, useCallback } from 'react';

// Define proper interfaces for Google Maps types
interface LatLng {
  lat: number;
  lng: number;
}

interface MapStyle {
  featureType?: string;
  elementType?: string;
  stylers: Array<Record<string, string | number>>;
}

interface MapOptions {
  center: LatLng;
  zoom: number;
  mapTypeId: string;
  mapTypeControl: boolean;
  streetViewControl: boolean;
  fullscreenControl?: boolean;
  zoomControl?: boolean;
  restriction?: {
    latLngBounds: MapBounds;
    strictBounds: boolean;
  };
  styles: MapStyle[];
  setOptions?: (options: Partial<MapOptions>) => void;
}

interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

interface CircleSymbol {
  path: number;
  fillColor: string;
  fillOpacity: number;
  strokeColor: string;
  strokeWeight: number;
  scale: number;
}

// Google Maps Data Layer types
interface DataStyleOptions {
  fillColor: string;
  fillOpacity: number;
  strokeColor: string;
  strokeWeight: number;
  strokeOpacity: number;
  visible: boolean;
}

interface DataFeature {
  getProperty: (name: string) => string;
}

interface DataStyleFunction {
  (feature: DataFeature): DataStyleOptions;
}

interface DataLayerOptions {
  map?: GoogleMap;
}

interface DataLayer {
  loadGeoJson: (url: string, options: DataLayerOptions, callback?: () => void) => void;
  setStyle: (style: DataStyleFunction) => void;
}

// Google Maps core types
interface GoogleMap {
  setCenter: (latLng: LatLng) => void;
  setZoom: (zoom: number) => void;
  setOptions: (options: Partial<MapOptions>) => void;
  data?: DataLayer;
}

interface MarkerOptions {
  position: LatLng;
  map: GoogleMap;
  title: string;
  icon: CircleSymbol;
  animation: number;
}

interface GoogleMarker {
  addListener: (event: string, handler: () => void) => void;
  setMap: (map: GoogleMap | null) => void;
}

interface InfoWindowOptions {
  content: string;
}

interface GoogleInfoWindow {
  open: (map: GoogleMap, marker: GoogleMarker) => void;
}

// Properly type the Google Maps API
declare global {
  interface Window {
    [key: string]: unknown;
    google: {
      maps: {
        Map: new (element: HTMLElement, options: MapOptions) => GoogleMap;
        Marker: new (options: MarkerOptions) => GoogleMarker;
        InfoWindow: new (options: InfoWindowOptions) => GoogleInfoWindow;
        SymbolPath: {
          CIRCLE: number;
        };
        Animation: {
          DROP: number;
        };
      };
    };
    initMap?: () => void;
  }
}

// Ventura County service areas with coordinates
const serviceAreas: Array<{ name: string } & LatLng> = [
  { name: 'Ventura', lat: 34.2805, lng: -119.2945 },
  { name: 'Oxnard', lat: 34.1975, lng: -119.1771 },
  { name: 'Camarillo', lat: 34.2163, lng: -119.0376 },
  { name: 'Thousand Oaks', lat: 34.1705, lng: -118.8375 },
  { name: 'Simi Valley', lat: 34.2694, lng: -118.7815 },
  { name: 'Moorpark', lat: 34.2856, lng: -118.8820 },
  { name: 'Ojai', lat: 34.4480, lng: -119.2429 },
  { name: 'Santa Paula', lat: 34.3542, lng: -119.0593 },
  { name: 'Fillmore', lat: 34.3992, lng: -118.9160 },
  { name: 'Port Hueneme', lat: 34.1478, lng: -119.1951 },
  { name: 'Newbury Park', lat: 34.1872, lng: -118.9278 },
  { name: 'Oak Park', lat: 34.1797, lng: -118.7583 },
];

export default function VenturaCountyMap(): ReactElement {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState(false);
  const googleMapRef = useRef<GoogleMap | null>(null);
  const markersRef = useRef<GoogleMarker[]>([]);
  
  // Define bounds outside of the useEffect to avoid the dependency warning
  const venturaBounds: MapBounds = {
    north: 34.6209, // Northern boundary
    south: 34.0459, // Southern boundary
    west: -119.5131, // Western boundary
    east: -118.6303, // Eastern boundary
  };

  // Initialize the map - kept separate for clarity and reusability
  const initMap = useCallback((): void => {
    if (!mapRef.current || !window.google || !window.google.maps) {
      console.warn('Google Maps not loaded or map container not ready');
      setMapError(true);
      setIsLoading(false);
      return;
    }

    try {
      // Create the map centered on Ventura County
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 34.3705, lng: -119.1391 }, // Center of Ventura County
        zoom: 10,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        styles: [
          // Custom styling to match website colors
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#e9e9e9" }, { lightness: 17 }] },
          { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 20 }] },
          { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }, { lightness: 17 }] },
          { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#2563eb" }, { lightness: 50 }, { weight: 1.2 }] },
          { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#1e40af" }] },
          { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3b82f6" }] }
        ]
      });

      // Store the map reference
      googleMapRef.current = map;

      // Add county boundary using the Data layer
      if (map.data) {
        // Use the Data API to load Ventura County's boundaries from a GeoJSON file
        // This creates a much more detailed boundary than a simple polygon
        map.data.loadGeoJson(
          // Use the Data layer to style the boundary
          'https://raw.githubusercontent.com/OpenDataDE/State-zip-code-GeoJSON/master/ca-counties.geojson',
          {},
          () => {
            // Style the county layer to highlight only Ventura County
            if (map.data) {
              map.data.setStyle((feature) => {
                // Check if this is Ventura County
                const isVenturaCounty = feature.getProperty('NAME') === 'Ventura';
                
                return {
                  fillColor: isVenturaCounty ? '#3b82f6' : 'transparent',
                  fillOpacity: isVenturaCounty ? 0.15 : 0,
                  strokeColor: isVenturaCounty ? '#3b82f6' : 'transparent',
                  strokeWeight: isVenturaCounty ? 2 : 0,
                  strokeOpacity: isVenturaCounty ? 0.8 : 0,
                  visible: isVenturaCounty
                };
              });
            }
          }
        );
      }

      // Define a circle appearance for service area markers
      const circleSymbol: CircleSymbol = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: '#3b82f6',
        fillOpacity: 0.6,
        strokeColor: '#1e40af',
        strokeWeight: 2,
        scale: 8
      };

      // Clear any existing markers
      markersRef.current.forEach(marker => {
        marker.setMap(null);
      });
      markersRef.current = [];

      // Add markers for each service area
      serviceAreas.forEach(area => {
        const marker = new window.google.maps.Marker({
          position: { lat: area.lat, lng: area.lng },
          map: map,
          title: area.name,
          icon: circleSymbol,
          animation: window.google.maps.Animation.DROP
        });

        // Store marker reference
        markersRef.current.push(marker);

        // Add info window for each marker
        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div style="font-weight: bold; color: #1e40af;">${area.name}</div>`
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      // Add restriction to prevent panning too far from Ventura County
      map.setOptions({
        restriction: {
          latLngBounds: venturaBounds,
          strictBounds: false,
        }
      });

      // Mark loading as complete
      setIsLoading(false);
      setMapError(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError(true);
      setIsLoading(false);
    }
  }, [venturaBounds]);

  useEffect(() => {
    // Make initMap accessible globally for the callback
    window.initMap = initMap;

    // Function to load Google Maps API with better error handling
    const loadGoogleMapsAPI = () => {
      // If script already exists in the document
      if (document.querySelector(`script[src*="maps.googleapis.com/maps/api"]`)) {
        // Check if Google Maps is already available
        if (window.google && window.google.maps) {
          initMap();
        } else {
          // Set a backup timeout in case the callback doesn't fire
          const timeoutId = setTimeout(() => {
            if (isLoading) {
              console.warn('Google Maps API callback did not fire within timeout, attempting to initialize map directly');
              initMap();
            }
          }, 5000);
          
          return () => clearTimeout(timeoutId);
        }
        return undefined; // Return undefined to match expected return type
      }
      
      // Create script element to load Google Maps API
      const googleMapsScript = document.createElement('script');
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
      
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      
      // Add error handling to the script
      googleMapsScript.onerror = () => {
        console.error('Failed to load Google Maps API script');
        setMapError(true);
        setIsLoading(false);
      };
      
      document.head.appendChild(googleMapsScript);
      
      // Set a backup timeout in case the callback doesn't fire
      const timeoutId = setTimeout(() => {
        if (isLoading) {
          console.warn('Google Maps API did not load within timeout');
          setMapError(true);
          setIsLoading(false);
        }
      }, 10000); // 10 seconds timeout
      
      return () => clearTimeout(timeoutId);
    };

    const cleanup = loadGoogleMapsAPI();

    // Clean up function
    return () => {
      // Clean up global function
      if (window.initMap) {
        delete window.initMap;
      }
      
      // Clean up markers if they exist
      if (markersRef.current.length > 0) {
        markersRef.current.forEach(marker => {
          marker.setMap(null);
        });
      }

      // Execute the cleanup function if it exists
      if (cleanup) {
        cleanup();
      }
    };
  }, [initMap, isLoading]); // Added dependencies

  // Render the map or loading/error states
  return (
    <div className="space-y-4">
      {/* Map Container */}
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 bg-blue-50 flex items-center justify-center z-10 rounded-xl">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mb-2"></div>
              <p className="text-blue-900">Loading map...</p>
            </div>
          </div>
        )}
        
        {mapError && (
          <div className="absolute inset-0 bg-red-50 flex items-center justify-center z-10 rounded-xl">
            <div className="text-center p-6">
              <div className="text-red-500 text-4xl mb-2">!</div>
              <p className="text-red-700 font-medium">We couldn&apos;t load the map</p>
              <button 
                onClick={() => {
                  setIsLoading(true);
                  setMapError(false);
                  initMap();
                }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
        
        <div 
          ref={mapRef} 
          className="h-96 w-full rounded-xl shadow-lg bg-blue-50"
        />
      </div>
      
      {/* Service Areas Legend - Below the map */}
      <div className="bg-white py-3 px-4 rounded-lg shadow-md text-sm">
        <p className="font-bold text-blue-900 mb-2">Areas We Serve:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1 text-gray-600">
          {serviceAreas.map(area => (
            <div key={area.name} className="flex items-center">
              <span className="h-2 w-2 bg-blue-600 rounded-full mr-1"></span>
              <span>{area.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-gray-600 italic">
          Not sure if we service your area? Contact us and we&apos;ll be happy to let you know!
        </p>
      </div>
    </div>
  );
}