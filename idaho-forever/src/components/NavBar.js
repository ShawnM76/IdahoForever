import React from 'react';
import { NavLink } from 'react-router-dom';
import NavPhoto from '../images/NavBar.jpg';

function NavBar() {
  return (
    <div className='nav-div'>
      <image src={NavPhoto} />
      <NavLink exact to='/'>
        {' '}
        Home{' '}
      </NavLink>
      <NavLink exact to='/about'>
        About Us{' '}
      </NavLink>
    </div>
  );
}

export default NavBar;
