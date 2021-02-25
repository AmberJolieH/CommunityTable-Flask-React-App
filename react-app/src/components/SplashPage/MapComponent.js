/** @jsxImportSource @emotion/react */
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const MapComponent = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [map, setMap] = useState();

  const containerStyle = {
    width: "50rem",
    height: "50rem",
    marginTop: "2rem",
    marginBottom: "220px"
  };


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

  const center = {
    lat: lat || 39.299236,
    lng: lng || -76.609383,
  };

  function handleMapLoad(currentMap) {
    setMap(currentMap);
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_fKEY}>
      <GoogleMap
        id="search-map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={handleMapLoad}
        // onDragEnd={handleBoundsChanged}
        // onClick={handleBoundsChanged}
      >
      </GoogleMap>
    </LoadScript>
  );
};
export default MapComponent;
