/** @jsx jsx */
import { jsx } from "@emotion/react";
import SearchBar from "./SearchBar";
import MapComponent from "./MapComponent";
import { useSelector } from "react-redux";
import {useEffect, useState} from "react";

const SplashPage = () => {
  //state grabber
  let resources = useSelector((state) => state.resources.list);
  const [filteredResources, setFilteredResources] = useState(Object.values(resources))

  //useEffect monitors the filtered resources for the assignment from state, then updates and renders the markers
  useEffect(() => {
    setFilteredResources(Object.values(resources))
  }, [resources])

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
      <SearchBar setFilteredResources={setFilteredResources} resources={resources}></SearchBar>
      <MapComponent resources={filteredResources}></MapComponent>
    </div>
  );
};

export default SplashPage;
