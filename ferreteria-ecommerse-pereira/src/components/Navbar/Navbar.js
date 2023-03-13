import "./Navbar.scss";
import logo from "./icono_ferreteria.png";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* <h1 className="header__logo">LOGO</h1> */}
        <img src={logo} className="header__logo" alt="logo" />

        <nav className="navbar">
          <a href="/" className="navbar__link">
            Inicio
          </a>
          <a href="/nosotros" className="navbar__link">
            Nosotros
          </a>
          <a href="/contacto" className="navbar__link">
            Contacto
          </a>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
};
