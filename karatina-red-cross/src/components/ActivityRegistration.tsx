// src/components/ActivityRegistration.tsx
import React, { useState } from 'react';
import { createActivity } from '../services/apiService';

const ActivityRegistration: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const activityData = { title, description, date, time, location };
        await createActivity(activityData);
        setTitle('');
        setDescription('');
        setDate('');
        setTime('');
        setLocation('');
        // Optionally, refresh the activity list here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Activity</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            <button type="submit">Register Activity</button>
        </form>
    );
};

export default ActivityRegistration;
