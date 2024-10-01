<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Us Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <p className="mb-4">
              We are committed to helping our community and responding to emergencies while adhering to the principles of the Red Cross.
            </p>
            <Link to="/about" className="text-white hover:text-red-600 hover:underline">Learn More</Link>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-red-600 hover:underline">Home</Link></li>
              <li><Link to="/events" className="hover:text-red-600 hover:underline">Events</Link></li>
              <li><Link to="/membership" className="hover:text-red-600 hover:underline">Membership</Link></li>
              <li><Link to="/get-involved" className="hover:text-red-600 hover:underline">Get Involved</Link></li>
              <li><Link to="/contact" className="hover:text-red-600 hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-lg font-bold mb-2">Newsletter Subscription</h2>
            <p className="mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full mb-2 rounded-md text-black"
                required
              />
              <button type="submit" className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-600 hover:text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-red-700 mt-8 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Red Cross Chapter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; 2024 Karatina University Red Cross Chapter. All Rights Reserved.</p>
            <div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </footer>
    );
};
>>>>>>> 37377f57453bfcc9547a8f268dc16dbfa00616e2
