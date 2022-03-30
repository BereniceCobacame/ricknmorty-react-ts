import "./index.css";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="header-container">Rick n Morty App</div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/characters">Personajes</Link>
          </li>
          <li>
            <Link to="/episodes">Episodios</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
