// src/pages/AboutPage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
          We are dedicated to helping those in need, providing assistance during emergencies, and promoting humanitarian principles.
        </p>
        <section>
          <h2 className="text-3xl font-semibold text-center mb-4">Our Focus Areas</h2>
          <ul className="text-lg text-center list-disc list-inside max-w-xl mx-auto">
            <li className="mb-2">Disaster Response</li>
            <li className="mb-2">Health and Safety</li>
            <li className="mb-2">Community Support</li>
            <li className="mb-2">Humanitarian Aid</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
