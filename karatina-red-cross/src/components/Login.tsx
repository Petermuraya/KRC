// src/components/Login.tsx

import React, { useState } from 'react';
import { loginUser } from '../api';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const credentials = { username, password };
        try {
            const response = await loginUser(credentials);
            alert('Login successful!');
            console.log('Login Response:', response.data);
            // Handle successful login (store token, redirect, etc.)
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
