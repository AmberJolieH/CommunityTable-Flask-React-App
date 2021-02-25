/** @jsxImportSource @emotion/react */
import React from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listResources } from "../../store/resources";

const MapComponent = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [map, setMap] = useState();
  const dispatch = useDispatch();
  //state grabber
  let resources = useSelector((state) => state.resources.list.resources);

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

  useEffect(() => {
    dispatch(listResources());
  }, [dispatch]);

  if (!resources) {
    return <h1>Loading...</h1>;
  }

  // map styles and variables
  const containerStyle = {
    width: "50rem",
    height: "50rem",
    marginTop: "2rem",
    marginBottom: "220px",
  };

  const center = {
    lat: lat || 29.760427,
    lng: lng || -95.369804,
  };

  // map functions
  function handleMapLoad(currentMap) {
    setMap(currentMap);
  }

  // function displayMarkerDetails(lat, lng) {
  //   return (
  //     <InfoWindow
  //       position={{
  //         lat: lat,
  //         lng: lng,
  //       }}
  //     >
  //       <div>Test</div>
  //     </InfoWindow>
  //   );
  // }

  //jsx
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEYf}>
      <GoogleMap
        id="search-map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={handleMapLoad}
        // onDragEnd={handleBoundsChanged}
        // onClick={handleBoundsChanged}
      >
        {resources.map((resource) => {
          return (
            <>
              <Marker
                id={resource.id}
                className="marker"
                key={resource.id}
                position={{
                  lat: Number(resource.location.lat),
                  lng: Number(resource.location.long),
                }}
                title={`"${resource.name}"\n${resource.location.city}, ${resource.catName}`}
                // onClick={displayMarkerDetails(
                //   Number(resource.location.lat),
                //   Number(resource.location.long)
                // )}
              >
                <InfoWindow>Test</InfoWindow>
              </Marker>
            </>
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
