import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/headerScreen.css'
// Images import



const HeaderScreen = () => {

  const navbar = useRef()

  const clickMenuHam = () => {
    navbar.current.classList.toggle('navbar-open')
  }

  return (
    <header className="header">
      <h1 className="header__title">
        <Link to='/'>IDAC</Link>
      </h1>
      <div onClick={clickMenuHam} className="header__menuham">
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav ref={navbar} className="navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className="navbar__label">Home</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink
              to='/project'
              className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className="navbar__label">Experiencia y Habilidades</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink
              to='/team'
              className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className="navbar__label">Portafolio</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink
              to='/contact'
              className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className="navbar__label">Contacto</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderScreen;
