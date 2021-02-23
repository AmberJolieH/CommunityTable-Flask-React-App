/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/react";
import { useState } from "react";

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
          alignItems: "center",
        }}
      >
        <div css={{ margin: "1rem", padding: "1rem" }}>test</div>
        <div css={{ margin: "1rem", padding: "1rem" }}>test</div>
        <div css={{ margin: "1rem", padding: "1rem" }}>test</div>
        <div css={{ margin: "1rem", padding: "1rem" }}>test</div>
      </form>
    </div>
  );
};

export default SearchBar;
