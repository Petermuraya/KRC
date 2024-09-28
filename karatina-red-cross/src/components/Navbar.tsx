// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">Red Cross Chapter</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex space-x-4">
              <Link to="/" className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link to="/events" className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link to="/membership" className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                Membership
              </Link>
              <Link to="/get-involved" className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                Get Involved
              </Link>
              <Link to="/contact" className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex items-center">
            <Link to="/login" className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link to="/register" className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold">
              Register
            </Link>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white"
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

      {/* Mobile menu, toggle classes based on menu state */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/about" className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
            About Us
          </Link>
          <Link to="/events" className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
            Events
          </Link>
          <Link to="/membership" className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
            Membership
          </Link>
          <Link to="/get-involved" className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
            Get Involved
          </Link>
          <Link to="/contact" className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
          <Link to="/login" className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
            Login
          </Link>
          <Link to="/register" className="bg-white text-red-600 block px-4 py-2 rounded-md font-semibold">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
