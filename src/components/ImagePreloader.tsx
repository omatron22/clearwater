// src/components/ImagePreloader.tsx
'use client';

import { useEffect } from 'react';

export default function ImagePreloader() {
  useEffect(() => {
    const imagesToPreload = [
      '/images/after2.JPG',
      '/images/before2.JPG',
      '/images/dad2.jpeg',
      '/images/pool.jpg',
      '/images/pool2.jpg',
      '/images/pool3.JPG'
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null; // This component doesn't render anything
}