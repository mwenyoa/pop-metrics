import React from 'react';
import { NavLink } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import style from './styles/Navbar.module.css';

const NavBar = () => (
  <>
    <nav>
      <NavLink to="/" className={style.backHome}>
        <TiArrowBackOutline title="Back To Home" />
      </NavLink>
      <NavLink to="/">
        <h2 className={style.Logo}>Global Census</h2>
      </NavLink>
      <div className={style.righttIcons}>
        <BsMic className={style.mic} />
        <AiOutlineSetting className={style.settings} />
      </div>
    </nav>
  </>
);

export default NavBar;
