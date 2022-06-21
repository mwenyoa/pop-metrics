import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiOutlineSetting } from 'react-icons/ai';
import style from './styles/Navbar.module.css';

const NavBar = () => (
  <>
    <nav>
      <NavLink to="/" className={style.backHome}>
        <TiArrowBackOutline />
      </NavLink>
      <NavLink to="/" className={style.Logo}>
        <h2>Global Census</h2>
      </NavLink>
      <AiOutlineSetting className={style.settings} />
      <Outlet />
    </nav>
  </>
);

export default NavBar;
