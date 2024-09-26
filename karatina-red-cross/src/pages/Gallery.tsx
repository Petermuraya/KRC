import React from 'react';
import '../assets/Gallery.css'; // Adjusted import path

const Gallery: React.FC = () => {
    const images = [
        // Add URLs of your images here
        'url-to-image1.jpg',
        'url-to-image2.jpg',
        'url-to-image3.jpg',
    ];

    return (
        <div>
            <h2>Gallery</h2>
            <div className="gallery">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Event ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
