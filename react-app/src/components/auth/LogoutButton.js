/** @jsx jsx */
// import React from "react";
// import { logout } from "../../services/auth";
import { jsx } from "@emotion/react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const onLogout = async (e) => {
    history.push("/")
    await dispatch(sessionActions.logout());
    setAuthenticated(false);
  };

  return (
    <button className="signupButton"
      onClick={onLogout}
      style={{
        marginTop: "0rem"
        // backgroundColor: "rgb(149, 181, 60)",
        // borderRadius: "2rem",
        // padding: "0.75rem 1rem 0.75rem 1rem",
        // color: "white",
        // border: "0px",
        // fontSize: "1rem",
        // fontWeight: "bold",
        // "cursor": "pointer"
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
