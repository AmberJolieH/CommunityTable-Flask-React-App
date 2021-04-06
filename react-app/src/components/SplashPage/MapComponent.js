/** @jsxImportSource @emotion/react */
import React from "react";
import {
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MarkerAndInfo from "./MarkerAndInfo";

const MapComponent = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [map, setMap] = useState();
  //state grabber
  let resources = useSelector((state) => Object.values(state.resources));

  // Use effects
  useEffect(() => {
    function geolocate() {
      if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          onGeolocateSuccess,
          onGeolocateError
        );
      }
    }

    function onGeolocateSuccess(coordinates) {
      setLat(coordinates.coords.latitude);
      setLng(coordinates.coords.longitude);
    }

    function onGeolocateError(error) {
      console.warn(error.code, error.message);
    }

    geolocate();
  }, []);

  if (!resources) {
    return <h1>Loading...</h1>;
  }

  // map styles and variables
  const containerStyle = {
    width: "80%",
    height: "60vh",
    marginBottom: '8rem',
    minWidth: "50rem",
    marginTop: "1rem",
    borderRadius: "2rem",
  };

  const center = {
    lat: lat || 29.760427,
    lng: lng || -95.369804,
  };

  // map functions
  function handleMapLoad(currentMap) {
    setMap(currentMap);
  }

  //jsx
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        id="search-map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={handleMapLoad}
      >
        {resources.map((resource) => {
          return (
            <MarkerAndInfo
              key={resource.id}
              resource={resource}
            ></MarkerAndInfo>
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};
export default MapComponent;

// 1. Dispatch thunk to get resources and load the locations
// 2. Filter out the locations based on the distance between the center of the map coordinates and the coordinates of each resource
// 3. Load the markers on the map with the coordinates that we filtered to
// 4. Reload map markers when map moves
// 5. Mark resources posted by the user a different color
// 6. Have a pop up component that shows the resource details when clicked (?)
