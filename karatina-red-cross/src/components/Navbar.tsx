import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img
                src="/src/assets/photos/logo red cross.png" // Ensure this is the correct path
                alt="Red Cross Logo"
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-white tracking-wide">
                Red Cross Chapter
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            <Link to="/" className="text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition">
              Home
            </Link>
            <Link to="/about" className="text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition">
              About Us
            </Link>
            <Link to="/events" className="text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition">
              Events
            </Link>
            <Link to="/membership" className="text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition">
              Membership
            </Link>
            <Link to="/get-involved" className="text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition">
              Get Involved
            </Link>
            <Link to="/contact" className="text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition">
              Contact
            </Link>
          </div>

          {/* Login/Register Section */}
          <div className="hidden sm:flex space-x-4">
            <Link to="/login" className="text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition">
              Login
            </Link>
            <Link to="/register" className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold text-sm transition hover:bg-gray-200">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="text-white hover:bg-red-700 block px-4 py-2 rounded-md text-base font-medium transition">
            Home
          </Link>
          <Link to="/about" className="text-white hover:bg-red-700 block px-4 py-2 rounded-md text-base font-medium transition">
            About Us
          </Link>
          <Link to="/events" className="text-white hover:bg-red-700 block px-4 py-2 rounded-md text-base font-medium transition">
            Events
          </Link>
          <Link to="/membership" className="text-white hover:bg-red-700 block px-4 py-2 rounded-md text-base font-medium transition">
            Membership
          </Link>
          <Link to="/get-involved" className="text-white hover:bg-red-700 block px-4 py-2 rounded-md text-base font-medium transition">
            Get Involved
          </Link>
          <Link to="/contact" className="text-white hover:bg-red-700 block px-4 py-2 rounded-md text-base font-medium transition">
            Contact
          </Link>
          <Link to="/login" className="text-white hover:bg-red-700 block px-4 py-2 rounded-md text-base font-medium transition">
            Login
          </Link>
          <Link to="/register" className="bg-white text-red-600 block px-4 py-2 rounded-md font-semibold transition hover:bg-gray-200">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
