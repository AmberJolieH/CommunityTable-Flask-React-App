/** @jsx jsx */
// import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { jsx } from "@emotion/react";
import homeIcon from "../../images/Comm unity table-2.svg";

const NavBar = ({ setAuthenticated, authenticated }) => {
  return (
    <nav className="nav">
      <div
        className="nav_flex"
        css={{
          alignSelf: "flex-start",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavLink className="App left__nav__flex" exact to="/">
          <img src={homeIcon} alt="React Logo" css={{ marginTop: "-1rem" }} />
        </NavLink>
        {authenticated && (
          <div
            className="right__nav__flex"
            css={{
              display: "flex",
              alignItems: "center",
              marginTop: "-2rem",
              padding: "0.5rem",
              textDecoration: "none",
            }}
          >
            <div>
              <NavLink
                to="/resources/create_resource"
                exact={true}
                activeClassName="active"
                className="button"
                css={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  padding: "0.75rem",
                  margin: "1rem"
                }}
              >
                Create A Resource
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/resources"
                exact={true}
                activeClassName="active"
                className="button"
                css={{
                  textDecoration: "none",
                  color: "black",
                  padding: "0.75rem",
                  fontWeight: "bold",
                  margin: "1rem"
                }}
              >
                All Resources
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/my_resources"
                exact={true}
                activeClassName="active"
                className="button"
                css={{
                  textDecoration: "none",
                  color: "black",
                  padding: "0.75rem",
                  fontWeight: "bold",
                  margin: "1rem"
                }}
              >
                My Resources
              </NavLink>
            </div>
            <div>
              <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
          </div>
        )}
        {!authenticated && (
          <div
            className="right__nav__flex"
            css={{
              display: "flex",
              alignItems: "center",
              marginTop: "-2rem",
              padding: "0.5rem",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            <div>
              <NavLink
                to="/resources"
                exact={true}
                activeClassName="active"
                className="button"
                css={{
                  textDecoration: "none",
                  color: "black",
                  padding: "0.75rem",
                  fontWeight: "bold",
                  margin: "1rem"
                }}
              >
                All Resources
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/login"
                exact={true}
                activeClassName="active"
                className="button"
                css={{
                  textDecoration: "none",
                  color: "black",
                  padding: "0.75rem",
                  fontWeight: "bold",
                  margin: "1rem"
                }}
              >
                Login
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/sign-up"
                exact={true}
                activeClassName="active"
                css={{
                  backgroundColor: "rgb(149, 181, 60)",
                  borderRadius: "2rem",
                  padding: "0.75rem",
                  color: "white",
                  border: "0px",
                  textDecoration: "none",
                  fontSize: "1rem",
                  margin: "1rem"
                }}
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
