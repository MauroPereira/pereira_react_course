import "./Navbar.scss";
import logo from "./icono_ferreteria.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* <h1 className="header__logo">LOGO</h1> */}
        <img src={logo} className="header__logo" alt="logo" />

        <nav className="navbar">
          <Link to="/" className="navbar__link">
            Inicio
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
    </header>
  );
};
