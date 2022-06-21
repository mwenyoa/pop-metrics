import React from 'react';
import style from './styles/Header.module.css';
import NavBar from './Navbar';

const Header = () => (
  <header className={style.Header}>
    <NavBar />
  </header>
);

export default Header;
