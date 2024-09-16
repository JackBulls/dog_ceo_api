import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <img src='logo-chien.png' alt="Logo Chien" className="lc"></img>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/gallery">Dog Gallery</Link></li>
      <li><Link to="/breed-search">Breed Search</Link></li>
    </ul>
  </nav>
);

export default Navbar;
