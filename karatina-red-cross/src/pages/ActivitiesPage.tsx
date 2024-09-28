import React from 'react';

const Activities: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h2 className="text-4xl font-bold text-center mb-6">Our Activities</h2>
            <ul className="text-lg list-disc list-inside max-w-2xl mx-auto text-center space-y-4">
                <li className="mb-2">Blood Drives</li>
                <li className="mb-2">Community Service</li>
                <li className="mb-2">Children’s Home Visits</li>
                <li className="mb-2">Trips</li>
            </ul>
        </div>
    );
};

export default Activities;

