import "./Navbar.scss";
import logo from "./icono_ferreteria.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export const Navbar = () => {
  const { user, logout } = useContext(LoginContext);
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <nav className="navbar">
          <Link to="/" className="navbar__link">
            Inicio
          </Link>
          <Link to="/productos/herramientas" className="navbar__link">
            Herramientas
          </Link>
          <Link to="/productos/electricidad" className="navbar__link">
            Electricidad
          </Link>
          <Link to="/productos/pintura" className="navbar__link">
            Pintura
          </Link>
          <Link to="/productos/construccion" className="navbar__link">
            Contrucción
          </Link>
          <Link to="/nosotros" className="navbar__link">
            Nosotros
          </Link>
          <Link to="/contacto" className="navbar__link">
            Contacto
          </Link>
        </nav>
        <CartWidget />
      </div>
      <div>
        <h6>Bienvenido {user.email}</h6>
        <button className="logout-btn" onClick={logout}>
          Salir
        </button>
      </div>
    </header>
  );
};
