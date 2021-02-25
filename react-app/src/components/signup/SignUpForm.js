/** @jsx jsx */
import React, { useState } from "react";
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../services/auth';
import { jsx } from "@emotion/react";

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
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
    <div  style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop:"5rem"}}>

      <div className="splashPage__container"
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}>
        <h2 css={{
          fontSize: "3rem",
          fontWeight: "bolder",
          margin: "1rem"
        }}>JOIN THE COMM<span css={{ color: "rgb(149, 181, 60)", marginTop:"2rem"}}>UNITY</span></h2>
      </div>
      <form onSubmit={onSignUp} class="standard-card">
        {/* <h2 className="standard-card-header" style={{}}>Sign-Up:</h2> */}
        
      <div>
        <label>User Name:</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password:</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
        <button className="signupButton" type="submit" style={{ marginLeft: "14.5rem" }}>Submit</button>
        <p style={{marginLeft:"3rem"}}>
          Already have an account?
        </p>
      <div>
          <Link to="/login"exact={true} activeClassName="active"
            className="text-button"
            style={{
              textDecoration: "none",
              color: "black",
              padding: "0.75rem",
              fontWeight: "bold",
              margin: "1rem",
              backgroundColor:"rgb(237, 237, 237)",
              marginLeft:"3.5rem"
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
