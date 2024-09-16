import React, { useState } from 'react';
import './DogBreedSearch.css';

const DogBreedSearch = () => {
  const [breed, setBreed] = useState('');
  const [breedImages, setBreedImages] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (breed === '') {
      setError('Please enter a breed');
      return;
    }

    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const data = await response.json();

      if (data.status === 'error') {
        setError('Breed not found, please check your input');
        setBreedImages([]);
      } else {
        setError('');
        setBreedImages(data.message.slice(0, 6)); // Limit to 6 images
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="breed-search">
      <h1>Recherche de chien par race</h1>
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value.toLowerCase())}
        placeholder="Enter dog breed"
      />
      <button onClick={handleSearch}>Rechercher</button>

      {error && <p className="error">{error}</p>}

      <div className="breed-images">
        {breedImages.map((image, index) => (
          <img key={index} src={image} alt={`Dog ${index + 1}`} className="breed-image" />
        ))}
      </div>
    </div>
  );
};

export default DogBreedSearch;
