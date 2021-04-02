/** @jsx jsx */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { useParams } from "react-router-dom";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const ResourceDetail = () => {
  const dispatch = useDispatch();
  const [claimQuant, setClaimQuant] = useState(0);

  const { id } = useParams();
  const resource = useSelector((state) => state.resources[id]);

  if (!resource) {
    return "loading...";
  }

  const handleIncrement = (type) => {
    if (type === "add") {
      if (claimQuant < resource.quantity) {
        setClaimQuant(claimQuant + 1);
      }
    } else if (type === "sub") {
      if (claimQuant > 0) {
        setClaimQuant(claimQuant - 1);
      }
    }
  };

  const handleClaim = () => {
    //dispatch thunk to subtract the amount in claimQuant from this item's quanity and updated backend
    
  };

  return (
    <div
      className="standard-card"
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <h2>Name: {resource.name}</h2>

      <img css={{ maxWidth: "100px" }} src={resource.image} />
      <p>Description: {resource.description}</p>
      <p>Category: {resource.catName}</p>
      <p>Location: {resource.location.name}</p>
      <p>Quantity Available: {resource.quantity}</p>
      <p>Starts At: {resource.startsAt}</p>
      <p>Ends At: {resource.endsAt}</p>
      <form onSubmit={handleClaim} css={{ alignItems: "center" }}>
        <div css={{ display: "flex", margin: "1rem", height: "3rem" }}>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => handleIncrement("add")}
              type="button"
              className="button"
              style={{ padding: "0", width: "20px" }}
            >
              <ArrowUpwardIcon style={{ fontSize: "1rem" }} />
            </button>
            <button
              onClick={() => handleIncrement("sub")}
              type="button"
              className="button"
              style={{ padding: "0", width: "20px" }}
            >
              <ArrowDownwardIcon style={{ fontSize: "1rem" }} />
            </button>
          </div>
          <input
            value={claimQuant}
            name="claimQuant"
            onChange={(e) => setClaimQuant(e.target.value)}
          ></input>
        </div>
        <button className="button" css={{ width: "100%" }}>
          Claim Resources
        </button>
      </form>
      {/* <p>Poster: {resource.user.name}</p> */}
    </div>
  );
};

export default ResourceDetail;
