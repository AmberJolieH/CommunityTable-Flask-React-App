/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/react";
import { useState } from "react";
import types from "./resource-types";
import SearchIcon from "@material-ui/icons/Search";
import PlacesAutocomplete from "./usePlacesAutoComplete";
import { getLatLng, getGeocode } from "use-places-autocomplete";

const SearchBar = ({ resources, setFilteredResources, setLat, setLng }) => {
  const [address, setAddress] = useState("");
  const [resourceTypeQuery, setResourceTypeQuery] = useState("all");

  const handleSubmit = async (e) => {
    //write function to use search thunk and return
    //all location data for search
    e.preventDefault();
    const geocodedAddress = await getGeocode({ address });
    const latlng = await getLatLng(geocodedAddress[0]);
    const { lat, lng } = latlng;
    setLat(lat);
    setLng(lng)
    filterResource(resourceTypeQuery);
  };

  const filterResource = async (type) => {
    let resourceRes;
    if (type === "all") {
      resourceRes = resources;
    } else {
      const res = await fetch(`/api/resources/filter`, {
        method: "POST",
        body: JSON.stringify({ category: type }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      resourceRes = response.resources;
    }
    setFilteredResources(Object.values(resourceRes));
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
        minWidth: "50rem",
        zIndex: "1",
      }}
    >
      <form
        className="searchBar__form"
        onSubmit={handleSubmit}
        css={{
          display: "flex",
          height: "7rem",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div
          className="location__container"
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "45%",
            maxWidth: "30rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <label
            css={{
              padding: "0.5rem",
              fontWeight: "bolder",
              letterSpacing: "1.5px",
            }}
          >
            LOCATION
          </label>
          <PlacesAutocomplete
            address={address}
            setAddress={setAddress}
          ></PlacesAutocomplete>
        </div>
        <div
          className="resourceType__container"
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "35%",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <label
            css={{
              padding: "0.5rem",
              fontWeight: "bolder",
              letterSpacing: "1.5px",
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
              width: "80%",
            }}
          >
            <option value="all">All</option>
            {types.map((type) => {
              return (
                <option key={type} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        <button css={{ backgroundColor: "rgb(241, 241, 241)", border: "none" }}>
          <SearchIcon
            css={{
              padding: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
              backgroundColor: "rgb(149, 181, 60)",
              color: "white",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
