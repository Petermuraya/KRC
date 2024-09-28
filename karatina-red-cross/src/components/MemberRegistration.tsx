// src/components/MemberRegistration.tsx
import React, { useState } from 'react';
import { createMember } from '../services/apiService';

const MemberRegistration: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const memberData = { name, email };
        await createMember(memberData);
        setName('');
        setEmail('');
        // Optionally, refresh the member list here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Member</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default MemberRegistration;
