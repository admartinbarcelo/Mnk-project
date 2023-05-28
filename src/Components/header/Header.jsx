import Logo from "../../assets/Logo.png";
import Search from "../../assets/search-1.png";
import User from "../../assets/user-1.png";
import Cart from "../../assets/shopping-cart.png";
import Menu from "../../assets/menu-1.png";
import Vector from "../../assets/Vector.png";

import HeaderInfo from "./HeaderInfo";

import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__icon"></div>
        <img src={Menu} alt="Logo" className="icons__item" />
        <ul className="nav__links">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Facial
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Corporal
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Bienestar
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Cofres
            </a>
          </li>
        </ul>
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo__image" />
        </div>
        <div className="icons">
          <div className="nav__lang">
            <img src={Vector} alt="Vector" className="nav__text" />
            <span>Español</span>
          </div>
          <img src={Search} alt="Logo" className="icons__item" />
          <img src={User} alt="Logo" className="icons__item" />
          <div className="cart__icon">
            <img src={Cart} alt="Cart" className="icons__item" />
            <div className="cart__quantity">
              <span>0</span>
            </div>
          </div>
        </div>
      </nav>
      <hr className="divider" />
      <>
      <HeaderInfo />
      </>
    </header>
  );
}

export default Header;
