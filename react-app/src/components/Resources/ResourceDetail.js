/** @jsx jsx */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { useParams } from "react-router-dom";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { claimResource } from "../../store/resources";
import CreateResource from "./createResource";

const ResourceDetail = () => {
  const dispatch = useDispatch();
  const [claimQuant, setClaimQuant] = useState(0);
  const user = useSelector(state => state.session.user)
  const [editForm, setEditForm] = useState(false)

  const { id } = useParams();
  const resource = useSelector((state) => state.resources.list[id]);

  if (!resource) {
    return "loading...";
  }

  const onEdit = (e) => {
    e.preventDefault()
    setEditForm(true)
  }

  const onDelete = (e) => {
    e.preventDefault()
  }

  const realDate = date => {
    console.log(date, '......', date.split(' '))
    let newDate = date.split(' ')
    return `${newDate[2]} ${newDate[1]} ${newDate[3]}` 
  }
  if(!resource){
      return 'loading...'
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
  if(resource.user.id === user.id){
    buttonContent = (
      <div>
          <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    )
  }
  if (!resource.user.id === user.id){
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
  }
  let content;
  if (editForm) {
    content = (
      <CreateResource resource={resource} />
    )
  }
  if(!editForm) {
    content = (
      <div className='standard-card' style={{ marginLeft: "auto", marginRight: "auto" }}>
        <h1 style={{
          textTransform: 'capitalize',
          marginTop: '-.3rem'
        }}>{resource.name}</h1>
        <p style={{
          marginTop: '-1rem',
          fontSize: '.8rem',
        }}>{resource.catName}</p>
        <img css={{ maxWidth: "12rem" }} src={resource.image} alt={resource.catName} />
        <p>Description: {resource.description}</p>
        <p style={{
          fontSize: '.8rem',
          marginTop: '-.7rem'
        }}>(Quantity: {resource.quantity})</p>
        <p>Pick-up Location: </p><p css={{
          marginTop: '-1rem',
          textAlign: 'center'
        }}>{resource.location.address}</p>
        <p style={{
          fontSize: '.8rem',
          alignItems: 'right',
          margin: '-.7rem',
          paddingBottom: '1rem'
        }}>Available: {realDate(resource.startsAt)} - {realDate(resource.endsAt)}</p>
        <p>Donation made posible by: {resource.user.username}</p>
        <form onSubmit={handleClaim} css={{ alignItems: "center" }}>
          <div css={{ display: "flex", margin: "1rem", height: "3rem", alignItems: "center" }}>
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
                style={{ padding: "0", width: "20px", backgroundColor: "rgb(237, 237, 237)" }}
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
      </div>
    );
  };
   
    return (
      <div>
        {content}
      </div>
    )
}

export default ResourceDetail;
