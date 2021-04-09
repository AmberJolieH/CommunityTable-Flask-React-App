/** @jsx jsx */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { jsx } from "@emotion/react";
import { Link, Redirect } from "react-router-dom";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();
  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(
        sessionActions.signUp(username, firstname, lastname, email, password)
      );
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2
          css={{
            fontSize: "3rem",
            fontWeight: "bolder",
            margin: "1rem",
          }}
        >
          JOIN THE COMM
          <span css={{ color: "rgb(149, 181, 60)", marginTop: "2rem" }}>
            UNITY
          </span>
        </h2>
      </div>
      <div style={{marginBottom:"1rem", width: "50%", textAlign: "center"}}>
        Community Table is an application designed for members of a community to
        help one another by sharing what they can. Ask a neighbor for some help
        or post some extra things you can share with those in need.
      </div>
      <form onSubmit={onSignUp} className="standard-card">
        {/* <h2 className="standard-card-header" style={{}}>Sign-Up:</h2> */}

        <div className="input-container">
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
            required={true}
          ></input>
        </div>
        <div className="input-container">
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            onChange={updateFirstname}
            value={firstname}
            required={true}
          ></input>
        </div>
        <div className="input-container">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            onChange={updateLastname}
            value={lastname}
            required={true}
          ></input>
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            required={true}
          ></input>
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            required={true}
          ></input>
        </div>
        <div className="input-container">
          <label>Repeat Password:</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button className="signupButton" type="submit">
          Sign Up
        </button>
        <p>Already have an account?</p>
        <div>
          <Link
            to="/login"
            className="text-button"
            style={{
              textDecoration: "none",
              color: "black",
              padding: "0.75rem",
              fontWeight: "bold",
              margin: "1rem",
              backgroundColor: "rgb(237, 237, 237)",
            }}
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

// firstname
// lastname
// isOrg
