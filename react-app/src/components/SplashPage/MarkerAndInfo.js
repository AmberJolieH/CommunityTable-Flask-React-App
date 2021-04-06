/** @jsxImportSource @emotion/react */
import React from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MarkerAndInfo = ({ resource }) => {
  const [display, setDisplay] = useState(false);
  return (
    <Marker
      id={resource.id}
      className="marker"
      position={{
        lat: Number(resource.location.lat),
        lng: Number(resource.location.long),
      }}
      title={`${resource.name}`}
      onClick={() => setDisplay(true)}
    >
      {display && (
        <InfoWindow onCloseClick={() => setDisplay(false)}>
          <div style={{overflowY:"none"}} className="resource__infoWindow">
            <div> {resource.name}</div>
            <div>Type: {resource.catName}</div>
            <div>Available: {resource.quantity}</div>
            <NavLink to={`/resources/${resource.id}`}>To Resource Page</NavLink>
            <div style={{maxHeight: "40px", maxWidth: "40px"}}>
              <img style={{objectFit: "cover", height: "100%", width: "100%"}}src={resource.image} alt="resource"/>
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default MarkerAndInfo;
