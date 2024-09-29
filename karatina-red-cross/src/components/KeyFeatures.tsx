import React from 'react';
import { FaHandsHelping, FaAmbulance, FaPeopleArrows } from 'react-icons/fa';

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: <FaHandsHelping className="w-12 h-12 text-red-600" />,
      title: "Volunteer Opportunities",
      description: "Join our team of volunteers to provide support and care to those in need."
    },
    {
      icon: <FaAmbulance className="w-12 h-12 text-red-600" />,
      title: "Emergency Services",
      description: "We offer first aid and emergency response services in times of crisis."
    },
    {
      icon: <FaPeopleArrows className="w-12 h-12 text-red-600" />,
      title: "Community Support",
      description: "We support local communities by providing health and welfare services."
    },
    {
      icon: <FaHandsHelping className="w-12 h-12 text-red-600" />, // You can change the icon if needed
      title: "Special Programmes",
      description: "Kenya Red Cross has special programmes that cater for special needs of vulnerable communities across the country."
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          What We Offer
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
