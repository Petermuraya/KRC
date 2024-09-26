import React, { useState } from 'react';

const Join: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to an API or database
        console.log(`Name: ${name}, Email: ${email}`);
        alert('Thank you for joining!');
        setName('');
        setEmail('');
    };

    return (
        <div>
            <h2>Join Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Join</button>
            </form>
        </div>
    );
};

export default Join;
