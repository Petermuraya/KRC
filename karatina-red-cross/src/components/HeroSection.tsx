// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-600 text-white text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Welcome to Karatina University Red Cross Chapter</h1>
        <p className="mb-6">Join us in making a difference in our community.</p>
        <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-200">
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
