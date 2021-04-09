/** @jsx jsx */
import { jsx } from "@emotion/react";
import SearchBar from "./SearchBar";
import MapComponent from "./MapComponent";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const SplashPage = () => {
  //state grabber
  let resources = useSelector((state) => state.resources.list);
  const [filteredResources, setFilteredResources] = useState(
    Object.values(resources)
  );
  const [lat, setLat] = useState(29.760427);
  const [lng, setLng] = useState(-95.369804);
  const [addressAlert, setAddressAlert] = useState(false);

  //useEffect monitors the filtered resources for the assignment from state, then updates and renders the markers
  useEffect(() => {
    setFilteredResources(Object.values(resources));
  }, [resources]);

  return (
    <div
      className="splashPage__container"
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {addressAlert && (
        <div
          css={{
            position: "absolute",
            top: "100px",
          }}
        >
          Please enter a valid address.
        </div>
      )}
      <h2
        css={{
          fontSize: "3rem",
          fontWeight: "bolder",
          margin: "1rem",
        }}
      >
        BRINGING <span css={{ color: "rgb(149, 181, 60)" }}>UNITY</span> TO THE
        TABLE
      </h2>
      <div>
        See what resources are around you.
      </div>
      <SearchBar
        setAddressAlert={setAddressAlert}
        setLat={setLat}
        setLng={setLng}
        setFilteredResources={setFilteredResources}
        resources={resources}
      ></SearchBar>
      <MapComponent
        lat={lat}
        lng={lng}
        setLng={setLng}
        setLat={setLat}
        resources={filteredResources}
      ></MapComponent>
    </div>
  );
};

export default SplashPage;
