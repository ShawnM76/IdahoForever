import React from 'react';
import { NavLink } from 'react-router-dom';
import NavPhoto from '../images/NavBar.jpg';

function NavBar() {
  return (
    <div className='nav-div'>
      <image src={NavPhoto} />
      <div className='nav-bar'>
        <NavLink exact to='/'>
          {' '}
          Home{' '}
        </NavLink>
        <NavLink to='/about'>About Us </NavLink>
        <NavLink to='/brews'>Breweries </NavLink>
        <NavLink to='/concerts'>Concerts </NavLink>
        <NavLink to='/restraunts'>Restraunts </NavLink>
        <NavLink to='/events'>Events </NavLink>
        <NavLink to='/trails'>Trails </NavLink>
        <NavLink to='/fishing'>Fishing </NavLink>
        <NavLink to='/clothing'>Clothing </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
