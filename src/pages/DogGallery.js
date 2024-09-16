import React, { useEffect, useState } from 'react';
import './DogGallery.css';

const DogGallery = () => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random/6');
      const data = await response.json();
      setDogImages(data.message);
    };

    fetchDogImages();
  }, []);

  return (
    <div className="gallery">
      <h1>Gallerie des chiens</h1>
      <div className="dog-gallery">
        {dogImages.map((image, index) => (
          <img key={index} src={image} alt={`Dog ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default DogGallery;
