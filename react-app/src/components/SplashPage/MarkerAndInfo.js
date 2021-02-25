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
          <div className="resource__infoWindow">
            <div>{resource.name}</div>
            <div>{resource.catName}</div>
            <div>{resource.quantity}</div>
            <NavLink to={`/resources/${resource.id}`}>Resource Page</NavLink>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default MarkerAndInfo;
