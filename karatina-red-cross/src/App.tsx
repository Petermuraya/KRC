import React from 'react';
import Header from './components/Header';
import MembersList from './components/MembersList';
import MemberRegistration from './components/MemberRegistration';
import ActivitiesList from './components/ActivitiesList';
import ActivityRegistration from './components/ActivityRegistration';
import Footer from './components/Footer';
import './App.css'; // Import the App.css file

const App: React.FC = () => {
    return (
        <div className="App min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center my-4">Karatina Red Cross Chapter</h1>
                
                {/* Home Section */}
                <section id="home" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Welcome to Karatina Red Cross Chapter</h2>
                    <p>Join us in making a difference in our community through humanitarian work.</p>
                </section>

                {/* About Section */}
                <section id="about" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">About Us</h2>
                    <p>The Karatina Red Cross Chapter is dedicated to providing assistance and relief to those in need. We focus on health, disaster response, and community services.</p>
                </section>

                {/* Member Registration Section */}
                <section className="mb-8">
                    <MemberRegistration />
                </section>

                {/* Members List Section */}
                <section className="mb-8">
                    <MembersList />
                </section>

                {/* Activity Registration Section */}
                <section className="mb-8">
                    <ActivityRegistration />
                </section>

                {/* Activities List Section */}
                <section>
                    <ActivitiesList />
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                    <p>If you have any questions or would like to get involved, please reach out to us!</p>
                    <p>Email: karatinaredcross@example.com</p>
                    <p>Phone: +254 700 000 000</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
