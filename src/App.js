import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import DogGallery from './pages/DogGallery';
import DogBreedSearch from './pages/DogBreedSearch';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<DogGallery />} />
        <Route path="/breed-search" element={<DogBreedSearch />} />
      </Routes>
    </Router>
  );
};

export default App;

