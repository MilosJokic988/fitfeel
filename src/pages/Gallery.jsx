import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = Array.from({ length: 17 }, (_, i) => `/images/slika${i + 1}.jpg`);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galerija</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Slika ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
