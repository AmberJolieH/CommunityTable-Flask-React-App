import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";
import * as sessionActions from "./store/session";
import * as resourceActions from "./store/resources";
import { LoadScript } from "@react-google-maps/api";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.sessionActions = sessionActions;
  window.resourceActions = resourceActions;
}

if (process.env.NODE_ENV !== "production") {
  window.store = store;
}

ReactDOM.render(
  <React.StrictMode>
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={["places"]}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </LoadScript>
  </React.StrictMode>,
  document.getElementById("root")
);
