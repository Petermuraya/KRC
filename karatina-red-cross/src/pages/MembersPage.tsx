// src/pages/Membership.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Membership: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    community: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here, you can add the code to send the form data to your backend
  };

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Membership Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Name</label>
            <input
              className="border rounded-lg w-full p-2"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email</label>
            <input
              className="border rounded-lg w-full p-2"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phone">Phone Number</label>
            <input
              className="border rounded-lg w-full p-2"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="dateOfBirth">Date of Birth</label>
            <input
              className="border rounded-lg w-full p-2"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="community">Community</label>
            <input
              className="border rounded-lg w-full p-2"
              type="text"
              id="community"
              name="community"
              value={formData.community}
              onChange={handleChange}
              required
            />
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg" type="submit">
            Register
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Membership;
