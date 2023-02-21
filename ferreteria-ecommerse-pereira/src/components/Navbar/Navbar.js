import './Navbar.scss'
import logo from './icono_ferreteria.png'

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* <h1 className="header__logo">LOGO</h1> */}
        <img src={logo} className='header__logo' alt='logo'/>

        <nav className="navbar">
          <a href="#" className="navbar__link">
            Proveedores oficiales
          </a>
          <a href="#" className="navbar__link">
            ¿Quiénes somos?
          </a>
          <a href="#" className="navbar__link">
            Contáctanos
          </a>
        </nav>
      </div>
    </header>
  );
};