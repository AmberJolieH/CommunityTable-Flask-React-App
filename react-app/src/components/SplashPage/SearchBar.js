/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/react";
import { useState } from "react";
import types from "./resource-types";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const [locationQuery, setLocationQuery] = useState("");
  const [resourceTypeQuery, setResourceTypeQuery] = useState("");

  const handleSubmit = async (e) => {
    //write function to use search thunk and return
    //all location data for search
    e.preventDefault();
  };

  return (
    <div
      className="searchBar__container"
      css={{
        borderRadius: "5rem",
        backgroundColor: "rgb(241, 241, 241)",
        display: "flex",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        className="searchBar__form"
        onSubmit={handleSubmit}
        css={{
          display: "flex",
          height: "8rem",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className="location__container">
          <label
            css={{
              padding: "0.5rem",
              fontWeight: "bolder",
              letterSpacing: "1.5px",
            }}
          >
            LOCATION
          </label>
          <input
            type="text"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            css={{
              borderRadius: "2rem",
              padding: "0.4rem",
              textAlign: "center",
            }}
          ></input>
        </div>
        <div className="resourceType__container">
          <label
            css={{
              padding: "0.5rem",
              fontWeight: "bolder",
              letterSpacing: "1.5px",
              marginLeft: "3rem",
            }}
          >
            RESOURCE TYPE
          </label>
          <select
            value={resourceTypeQuery}
            onChange={(e) => setResourceTypeQuery(e.target.value)}
            css={{
              borderRadius: "2rem",
              padding: "0.4rem",
              textAlign: "center",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {types.map((type) => {
              return (
                <option css={{}} key={type} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        <SearchIcon
          css={{
            padding: "1rem",
            margin: "1rem",
            backgroundColor: "rgb(149, 181, 60)",
            color: "white",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
