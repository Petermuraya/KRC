import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Karatina University Red Cross Chapter</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/activities">Activities</a></li>
                    <li><a href="/join">Join Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
