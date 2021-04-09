import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
    const user = await dispatch(sessionActions.login("demo@aa.io", "password"));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

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
      <h2 style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
          margin: "1rem"
        }}>ENTER THE COMM<span style={{ color: "rgb(149, 181, 60)", marginTop: "2rem" }}>UNITY</span></h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2.5rem",
        }}
      >
        <form onSubmit={onLogin} className="standard-card">
          <div>
            {errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
              required={true}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              required={true}
            />
            <button
              style={{ marginTop: "1rem" }}
              className="signupButton"
              type="submit"
            >
              Login
            </button>
            <button
              type="button"
              onClick={demoLogin}
              className="button"
              style={{
                color: "black",
                padding: "0.5rem",
                margin: "1rem",
                backgroundColor: "rgb(237, 237, 237)",
                fontWeight: "bold",
              }}
              className="button"
            >
              Demo User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
