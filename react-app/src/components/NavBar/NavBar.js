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
          flexFlow: "nowrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavLink className="App left__nav__flex" exact to="/">
          <img src={homeIcon} alt="React Logo" css={{ marginTop: "-1rem" }} />
        </NavLink>
        {authenticated && (
          <div
            className="center__nav__flex"
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
                  padding: "0.75rem 0.3rem 0.75rem 0.3rem",
                  margin: "0.25rem",
                  textAlign: "center",
                  display: "block",
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
                  padding: "0.75rem 0.3rem 0.75rem 0.3rem",
                  fontWeight: "bold",
                  margin: "0.25rem",
                  textAlign: "center",
                  display: "block",
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
                  padding: "0.75rem 0.3rem 0.75rem 0.3rem",
                  fontWeight: "bold",
                  margin: "1rem",
                  textAlign: "center",
                  display: "block",
                }}
              >
                My Claimed Resources
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/posted_resources"
                exact={true}
                activeClassName="active"
                className="button"
                css={{
                  textDecoration: "none",
                  color: "black",
                  padding: "0.75rem 0.3rem 0.75rem 0.3rem",
                  fontWeight: "bold",
                  margin: "0.25rem",
                  textAlign: "center",
                  display: "block",
                }}
              >
                My Posted Resources
              </NavLink>
            </div>
          </div>
        )}
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
            <LogoutButton setAuthenticated={setAuthenticated} />
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
                  padding: "0.75rem 0.3rem 0.75rem 0.3rem",
                  fontWeight: "bold",
                  margin: "0.75rem",
                  textAlign: "center",
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
                  padding: "0.75rem 0.3rem 0.75rem 0.3rem",
                  fontWeight: "bold",
                  margin: "0.75rem",
                  textAlign: "center",
                }}
              >
                Login
              </NavLink>
            </div>
            <NavLink
              to="/sign-up"
              exact={true}
              activeClassName="active"
              className="signupButton"
              style={{ marginTop: "0rem", textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "rgb(149, 181, 60)",
                  borderRadius: "2rem",
                  padding: "0.02rem",
                  color: "white",
                  border: "0px",
                  fontSize: "-1rem",
                  marginLeft: ".5rem",
                }}
              >
                Sign Up
              </div>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
