/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { useParams } from "react-router-dom";


const ResourceDetail = () =>{
    const dispatch = useDispatch();

    const {id} = useParams();
    const resource = useSelector(state => state.resources[id])

    const realDate = date => {
      console.log(date, '......', date.split(' '))
      let newDate = date.split(' ')
      return `${newDate[2]} ${newDate[1]} ${newDate[3]}` 
    }
    if(!resource){
        return 'loading...'
    }

    return(
        <div className='standard-card' style={{marginLeft:"auto", marginRight: "auto"}}>
            <h1 style={{
              textTransform: 'capitalize',
              marginTop: '-.3rem'
            }}>{resource.name}</h1>
            <p style={{
              marginTop: '-1rem',
              fontSize: '.8rem',
            }}>{resource.catName}</p>
            <img css={{ maxWidth: "12rem" }} src={resource.image}/>
            <p>Description: {resource.description}</p>
            <p style={{
              fontSize: '.8rem',
              marginTop: '-.7rem'
            }}>(Quantity: {resource.quantity})</p>
            <p>Pick-up Location: {resource.location.name}</p>
            <p style={{
              fontSize: '.8rem',
              alignItems: 'right',
              margin: '-.7rem',
              paddingBottom: '1rem'
            }}>Available: {realDate(resource.startsAt)} - {realDate(resource.endsAt)}</p>
            <p>Donation made posible by: {resource.user.username}</p>
        </div>
    )
}

export default ResourceDetail;
