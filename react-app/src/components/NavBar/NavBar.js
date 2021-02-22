import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { css, jsx } from '@emotion/react'
import { reactComponent as homeIcon } from "../../images/Comm-unity-table.svg"
const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="navBar">
      <ul>
        <NavLink exact to="/" className="nav-left">
          <h2 className="logo" style={{ 

          }}>
            <homeIcon
              alt="logoimage"
            />
          </h2>
        </NavLink>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
