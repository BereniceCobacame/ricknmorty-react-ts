import { Link } from "react-router-dom";
import "./index.css";
import logo from "./kirara.png";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <Link className="home-link" to="/home">
            <img src={logo} width="50%" alt="logo" />
            <h1 style={{ color: "thistle" }}>Rick&Morty</h1>
          </Link>
          <a className="sidebar-item" href="#">
            <h3>Something</h3>
          </a>
          <a className="sidebar-item" href="#">
            <h3>Something more</h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
