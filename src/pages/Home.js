import React, { useEffect, useState } from 'react'; // Importer React et les hooks pour gérer l'état et les effets
import './Home.css'; // Importer les styles CSS pour la page d'accueil

const Home = () => {
  const [randomDog, setRandomDog] = useState(''); // Définir l'état pour l'image aléatoire du chien

  // Utiliser useEffect pour récupérer une image de chien aléatoire lors du montage du composant
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random') // Appel à l'API Dog CEO pour récupérer une image
      .then((res) => res.json()) // Convertir la réponse en JSON
      .then((data) => setRandomDog(data.message)); // Mettre à jour l'état avec l'image récupérée
  }, []);

  return (
    <div className="home">
      <div className="h1-p">
        <h1>Bienvenu sur Dog CEO</h1>
        <p>Profitez de parcourir des photos de chiens au hasard ou recherchez votre race préférée.</p>
      </div>
      <div className="img">
        {randomDog && <img src={randomDog} alt="Random Dog" className="banner-image" />}
      </div>
    </div>
  );
};

export default Home; // Exporter le composant Home

