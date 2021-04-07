/** @jsx jsx */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { useParams } from "react-router-dom";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { claimResource } from "../../store/resources";

const ResourceDetail = () => {
  const dispatch = useDispatch();
  const [claimQuant, setClaimQuant] = useState(0);

  const { id } = useParams();
  const resource = useSelector((state) => state.resources.list[id]);

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

  const handleClaim = async (e) => {
    //dispatch thunk to subtract the amount in claimQuant from this item's quanity and updated backend
    e.preventDefault();
    const res = await dispatch(claimResource(resource.id, claimQuant));
    if(!res.error){
      console.log("success")
    }
  };
  let buttonContent;
  if(resource.quantity >= 1){
    buttonContent = (
        <button className="button" css={{ width: "100%" }}>
          Claim Resources
        </button>
    )
  }
  if(resource.quantity <= 0){
    buttonContent = (
      <button className="button" disabled css={{ width: "100%" }}>
        Off the table
      </button>
    )
  }

  return (
    <div
      className="standard-card"
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <h2>Name: {resource.name}</h2>

      <img css={{ maxWidth: "100px" }} src={resource.image} alt="resource" />
      <p>Description: {resource.description}</p>
      <p>Category: {resource.catName}</p>
      <p>Location: {resource.location.name}</p>
      <p>Quantity Available: {resource.quantity}</p>
      <p>Starts At: {resource.startsAt}</p>
      <p>Ends At: {resource.endsAt}</p>
      <form onSubmit={handleClaim} css={{ alignItems: "center" }}>
        <div css={{ display: "flex", margin: "1rem", height: "3rem", alignItems: "center"}}>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => handleIncrement("add")}
              type="button"
              className="button"
              style={{ padding: "0", width: "20px", backgroundColor: "rgb(237, 237, 237)" }}
            >
              <ArrowUpwardIcon style={{ fontSize: "1rem" }} />
            </button>
            <button
              onClick={() => handleIncrement("sub")}
              type="button"
              className="button"
              style={{padding: "0", width: "20px", backgroundColor: "rgb(237, 237, 237)"}}
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
       {buttonContent}
      </form>
      {/* <p>Poster: {resource.user.name}</p> */}
    </div>
  );
};

export default ResourceDetail;
