import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Join from './pages/Join';
import Gallery from './pages/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <Router>
            <App>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </App>
        </Router>
    </React.StrictMode>
);
