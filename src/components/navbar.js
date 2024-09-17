import { Link } from 'react-router-dom'; // Importer le composant Link pour la navigation
import './navbar.css'; // Importer les styles CSS spécifiques à la barre de navigation
import logo from '../assets/images/logo-chien.png'; // Importer l'image du logo

// Fonctionnalité principale du composant Navbar
const Navbar = () => (
  <nav className="navbar">
    {/* Affichage du logo */}
    <img src={logo} alt="Logo" className="lc"></img>
    <ul>
      {/* Menu de navigation */}
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/gallery">Gallerie Chiens</Link></li>
      <li><Link to="/breed-search">Recherche Race</Link></li>
    </ul>
  </nav>
);

export default Navbar; // Exporter le composant pour pouvoir l'utiliser ailleurs
