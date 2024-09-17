import React, { useState } from 'react'; // Importer React et le hook useState
import './DogBreedSearch.css'; // Importer les styles CSS pour la page de recherche par race

const DogBreedSearch = () => {
  const [breed, setBreed] = useState(''); // État pour stocker la race de chien entrée par l'utilisateur
  const [breedImages, setBreedImages] = useState([]); // État pour stocker les images récupérées de la race
  const [error, setError] = useState('');

  // Fonction pour gérer la soumission du formulaire et rechercher les images
  const handleSearch = async () => {
    if (breed === '') { // Vérifier que l'utilisateur a bien entré une race
      setError('Please enter a breed');
      return;
    }

    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`); // Appel à l'API Dog CEO avec la race
      const data = await response.json(); // Convertir la réponse en JSON

      if (data.status === 'error') {
        setError('Race non trouvé, vérifiez votre input.'); // Vérifier l'erreur
        setBreedImages([]);
      } else {
        setError('');
        setBreedImages(data.message.slice(0, 12)); // Limit to 12 images
      }
    } catch (err) {
      setError('Une erreur est survenue, essayez plus tard.'); // Essayer plus tard
    }
  };

  return (
    <div className="breed-search">
      <h1>Recherche de chiens par race</h1>
      <div className="recherche">
        <label>
        {/* Champ de saisie pour entrer une race */}
          <input
            type="text"
            className="breed-input"
            value={breed}
            onChange={(e) => setBreed(e.target.value.toLowerCase())} // Mettre à jour l'état avec l'entrée utilisateur
            placeholder="Entrer une race"
          />
          {/* Bouton pour lancer la recherche */}
          <button className="search-button" onClick={handleSearch}>Rechercher</button>

          {error && <p className="error">{error}</p>}
        </label>
      </div>

      <div className="breed-images">
        {breedImages.map((image, index) => ( // Si des images ont été récupérées
          <img key={index} src={image} alt={`Dog ${index + 1}`} className="breed-image" />
          // Affichage de chaque image
        ))}
      </div>
    </div>
  );
};

export default DogBreedSearch; // Exporter le composant DogBreedSearch
