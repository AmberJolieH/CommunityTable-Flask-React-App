/** @jsx jsx */
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { jsx } from '@emotion/react'
import homeIcon from "/Users/amberjolie/CommunityTable-Flask-React-App/react-app/src/images/Comm unity table-2.svg"



const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="nav">
      <div className="nav_flex" css={{ alignSelf: "flex-start", display: 'flex', flexFlow: 'row wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <NavLink className="App" exact to="/">
        <img src={homeIcon} alt="React Logo" css={{ marginLeft: "1rem", marginTop: "0rem", }} />
      </NavLink>
        <div className="right__nav__flex" css={{ display: 'flex', alignItems: 'center', marginTop: "-2rem" }}>
        <div>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </div>
        <div>
          <NavLink to="/resources" exact={true} activeClassName="active">
            All Resources
          </NavLink>
        </div>
        <div>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
    </div>
    </nav>
  );
}

export default NavBar;
