import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(sessionActions.login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(sessionActions.login('demo@aa.io', 'password'));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10rem"
      }}>
        <form onSubmit={onLogin} class="standard-card">
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <button style={{ marginLeft: "3.5rem" }} className="signupButton" type="submit">Login</button>

          </div>
          <form onSubmit={demoLogin}>
            <button style={{
              textDecoration: "none",
              color: "black",
              padding: "0.75rem",
              margin: "1rem",
              backgroundColor: "rgb(237, 237, 237)",
              marginLeft: "2.9rem"
            }} className="text-button" type="submit">Demo User Login</button>
          </form>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
