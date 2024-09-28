// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section bg-red-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to Karatina University Red Cross Chapter</h1>
        <p className="mt-4 text-lg">Embracing the Principles of Humanity, Impartiality, Neutrality, Independence, Voluntary Service, Unity, and Universality</p>
        <button className="mt-8 bg-white text-red-600 px-6 py-2 rounded-lg font-semibold">
          Join Us
        </button>
      </section>

      {/* Principles Section */}
      <section className="principles-section py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Our Principles</h2>
        <p className="mt-4 text-lg">We are guided by the fundamental principles of the Red Cross and Red Crescent Movement:</p>
        <ul className="mt-6 space-y-4 text-left mx-auto max-w-screen-md">
          <li><strong>Humanity:</strong> To prevent and alleviate human suffering.</li>
          <li><strong>Impartiality:</strong> No discrimination as to nationality, race, religious beliefs, class, or political opinions.</li>
          <li><strong>Neutrality:</strong> We do not take sides in hostilities or engage in controversies.</li>
          <li><strong>Independence:</strong> Our activities are independent of any government or institution.</li>
          <li><strong>Voluntary Service:</strong> We are a voluntary relief organization not prompted by any desire for gain.</li>
          <li><strong>Unity:</strong> There can only be one Red Cross Society in any one country.</li>
          <li><strong>Universality:</strong> The Red Cross is a worldwide institution with equal status in all societies.</li>
        </ul>
      </section>

      {/* Activities Section */}
      <section className="activities-section py-20">
        <h2 className="text-3xl font-bold text-center">Our Key Activities</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="activity bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Blood Drives</h3>
            <p className="mt-4">Join our efforts in organizing life-saving blood donation campaigns.</p>
          </div>
          <div className="activity bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Community Service</h3>
            <p className="mt-4">Get involved in supporting and uplifting local communities.</p>
          </div>
          <div className="activity bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Children's Home Visits</h3>
            <p className="mt-4">Make a difference by participating in visits to children's homes.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section bg-green-100 py-20">
        <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
        <div className="mt-8 flex justify-center">
          <p className="text-lg">Stay tuned for upcoming events like blood drives, community outreach, and more.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
