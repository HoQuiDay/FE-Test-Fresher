import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <div className='topnav'>
      <ul>
        <li>
          <NavLink
            exact
            to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
          <NavLink to='/weather'>Weather App</NavLink>
        </li>
        <li>
          <NavLink to='/otp'>OTP App</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
