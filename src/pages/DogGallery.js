import React, { useEffect, useState } from 'react'; // Importer React et les hooks
import './DogGallery.css'; // Importer les styles CSS pour la galerie de chiens

const DogGallery = () => {
  const [dogImages, setDogImages] = useState([]); // État pour stocker les images des chiens

  // Utiliser useEffect pour récupérer 12 images de chiens aléatoires
  useEffect(() => {
    const fetchDogImages = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random/12'); // Appel à l'API pour obtenir 6 images
      const data = await response.json(); // Convertir la réponse en JSON
      setDogImages(data.message); // Mettre à jour l'état avec les images récupérées
    };

    fetchDogImages();
  }, []);

  return (
    <div className="gallery">
      <h1>Gallerie des chiens</h1>
      <div className="dog-gallery">
        {dogImages.map((image, index) => (
          <img key={index} src={image} alt={`Dog ${index + 1}`} className="gallery-image" />
          /* Affichage de chaque image de chien avec un attribut alt dynamique */
        ))}
      </div>
    </div>
  );
};

export default DogGallery; // Exporter le composant DogGallery
