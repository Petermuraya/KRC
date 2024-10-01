<<<<<<< HEAD
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // The Layout component
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import './App.css'; // Import your CSS styles

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Use Layout as a wrapper for all pages */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes inside Layout */}
          <Route index element={<HomePage />} /> {/* HomePage is the default route */}
          <Route path="about" element={<AboutPage />} /> {/* AboutPage route */}
          <Route path="members" element={<MembersPage />} /> {/* MembersPage route */}
          <Route path="activities" element={<ActivitiesPage />} /> {/* ActivitiesPage route */}
          <Route path="contact" element={<ContactPage />} /> {/* ContactPage route */}
        </Route>
      </Routes>
    </Router>
  );
=======
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
>>>>>>> 37377f57453bfcc9547a8f268dc16dbfa00616e2
};

export default App;
