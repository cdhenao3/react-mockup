import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home 
              <i className="fa fa-home"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/messages">Messages
              <i className="fa fa-envelope"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/wishlist">Wishlist
              <i className="fa fa-star"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/settings">Settings
              <i className="fa fa-cog"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/my-account">My account
              <i className="fa fa-user"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
   );
}
 
export default NavBar;