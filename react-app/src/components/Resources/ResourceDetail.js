/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { useParams } from "react-router-dom";


const ResourceDetail = () =>{
    const dispatch = useDispatch();

    const {id} = useParams();
    const resource = useSelector(state => state.resources[id])


    if(!resource){
        return 'loading...'
    }

    return(
        <div className='standard-card' style={{marginLeft:"auto", marginRight: "auto"}}>
            <h2>Name: {resource.name}</h2>

            <img css={{ maxWidth: "100px" }} src={resource.image}/>
            <p>Description: {resource.description}</p>
            <p>Category: {resource.catName}</p>
            <p>Location: {resource.location.name}</p>
            <p>Quantity: {resource.quantity}</p>
            <p>Starts At: {resource.startsAt}</p>
            <p>Ends At: {resource.endsAt}</p>
            {/* <p>Poster: {resource.user.name}</p> */}
        </div>
    )
}

export default ResourceDetail;
