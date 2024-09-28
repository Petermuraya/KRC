// src/pages/About.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          The Karatina University Red Cross Chapter is dedicated to providing humanitarian support
          and engaging students in community service. We strive to uphold the principles of the
          Red Cross and make a positive impact in our community.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">
          To alleviate human suffering and promote health, safety, and education in our community.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Principles</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Humanity</li>
          <li>Impartiality</li>
          <li>Neutrality</li>
          <li>Independence</li>
          <li>Voluntary Service</li>
          <li>Unity</li>
          <li>Universality</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default About;
