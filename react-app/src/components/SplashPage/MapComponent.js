/** @jsxImportSource @emotion/react */
import React from "react";
import {
  GoogleMap,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";
import MarkerAndInfo from "./MarkerAndInfo";

const MapComponent = ({resources, lat, lng, setLat, setLng}) => {
  const [map, setMap] = useState();

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
  }, [setLat, setLng]);

  if (!resources) {
    return <h1>Loading...</h1>;
  }

  // map styles and variables
  const containerStyle = {
    width: "80%",
    height: "60vh",
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

  //handle bounds changing
  function handleBoundsChange() {
    const bounds = map.getBounds();
    const center = bounds.getCenter();
    setLat(center.lat());
    setLng(center.lng());
  }

  //jsx
  return (
      <GoogleMap
        id="search-map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={handleMapLoad}
        onDragEnd={handleBoundsChange}
        onClick={handleBoundsChange}
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
  );
};
export default MapComponent;

// 1. Dispatch thunk to get resources and load the locations
// 2. Filter out the locations based on the distance between the center of the map coordinates and the coordinates of each resource
// 3. Load the markers on the map with the coordinates that we filtered to
// 4. Reload map markers when map moves
// 5. Mark resources posted by the user a different color
// 6. Have a pop up component that shows the resource details when clicked (?)
