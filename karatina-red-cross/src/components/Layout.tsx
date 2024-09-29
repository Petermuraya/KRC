// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar should always be visible */}
      <Navbar />

      {/* Main content area where the pages (Home, About, etc.) will be displayed */}
      <main className="flex-grow">
        <Outlet /> {/* The current page will be rendered here */}
      </main>

      {/* Footer should always be visible */}
      <Footer />
    </div>
  );
};

export default Layout;
