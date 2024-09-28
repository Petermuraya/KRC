// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // The new Layout component
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import './App.css'; // Import your CSS styles

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    {/* Define all the routes for the application */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/members" element={<MembersPage />} />
                    <Route path="/activities" element={<ActivitiesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
