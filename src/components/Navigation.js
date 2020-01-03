import React from 'react';
import { Link } from 'react-router-dom';
import { nav, link } from '../styles/scss/navigation.module.scss';

const Navigation = () => {
  return (
    <div className={nav}>
      <Link className={link} to='/'>
        Home
      </Link>
      <Link className={link} to='/location'>
        Location
      </Link>
      <Link className={link} to='/menu'>
        Menu
      </Link>
    </div>
  );
};

export default Navigation;
