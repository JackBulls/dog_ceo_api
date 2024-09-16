import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [randomDog, setRandomDog] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setRandomDog(data.message));
  }, []);

  return (
    <div className="home">
      <h1>Bienvenu sur Dog CEO</h1>
      <p>Profitez de parcourir des photos de chiens au hasard ou recherchez votre race préférée.</p>
      {randomDog && <img src={randomDog} alt="Random Dog" className="banner-image" />}
    </div>
  );
};

export default Home;
