import React from 'react';
import HeroSection from '../components/HeroSection';
import KeyFeatures from '../components/KeyFeatures';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home: React.FC = () => {
  return (
    <div className="home-page bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Key Features Section */}
      <KeyFeatures />

      {/* Principles Section */}
      <section className="principles-section py-20 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black">Our Principles</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
          We are guided by the fundamental principles of the Red Cross and Red Crescent Movement:
        </p>
        <ul className="mt-6 space-y-4 md:space-y-6 text-left mx-auto max-w-screen-md text-gray-900">
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
      <section className="activities-section py-20 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black">Our Key Activities</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="activity bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-black">Blood Drives</h3>
            <p className="mt-4 text-gray-700">Join our efforts in organizing life-saving blood donation campaigns.</p>
          </div>
          <div className="activity bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-black">Community Service</h3>
            <p className="mt-4 text-gray-700">Get involved in supporting and uplifting local communities.</p>
          </div>
          <div className="activity bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-black">Children's Home Visits</h3>
            <p className="mt-4 text-gray-700">Make a difference by participating in visits to children's homes.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-white py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black">What Our Volunteers Say</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
          <div className="testimonial bg-gray-50 p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-700 italic">"Volunteering with the Red Cross has been life-changing. It's an incredible opportunity to help others."</p>
            <h4 className="mt-4 text-lg font-semibold text-black">- Sarah, Volunteer</h4>
          </div>
          <div className="testimonial bg-gray-50 p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-700 italic">"I've met amazing people and made a real difference in my community."</p>
            <h4 className="mt-4 text-lg font-semibold text-black">- James, Volunteer</h4>
          </div>
          <div className="testimonial bg-gray-50 p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-700 italic">"The Red Cross gave me a platform to give back, and it's been an incredibly fulfilling experience."</p>
            <h4 className="mt-4 text-lg font-semibold text-black">- Emily, Volunteer</h4>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us-section py-20 bg-red-600 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold">Join Us in Making a Difference</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Become a part of our mission to help those in need. Whether through volunteering or donating, you can make a big impact.
        </p>
        <div className="mt-8">
          <a href="/join" className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold text-lg transition-colors hover:bg-gray-200">
            Join Now
          </a>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section bg-gray-100 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black">Upcoming Events</h2>
        <div className="mt-8 flex flex-col items-center justify-center">
          <p className="text-lg md:text-xl text-gray-800">Stay tuned for upcoming events like blood drives, community outreach, and more.</p>
          <a href="/events" className="mt-6 bg-red-600 text-white px-6 py-3 rounded-md font-semibold text-lg transition-colors hover:bg-red-700">
            View Events
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default Home;
