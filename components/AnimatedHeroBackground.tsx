'use client';

import { useState, useEffect } from 'react';

interface AnimatedHeroProps {
  images: string[];
}

export default function AnimatedHeroBackground({ images }: AnimatedHeroProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-96 overflow-hidden rounded-lg shadow-2xl">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Man Behind <br/> Kwara Ti Wa Ni
          </h2>
          <p className="text-xl text-amber-300">Engr. Olufemi Sanni, FNICE, FNSE — ARABA</p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentImage ? 'bg-amber-500 w-8' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
