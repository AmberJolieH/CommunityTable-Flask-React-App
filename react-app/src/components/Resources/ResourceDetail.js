/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { getOneResource } from "../../store/resources"
import { useParams } from "react-router-dom";
import resourceImages from "./resourceImages"
// import clothing from "/catImages/clothing.jpg"


const ResourceDetail = () =>{
    const dispatch = useDispatch();

    const {id} = useParams();
    const resource = useSelector(state => state.resources[id])
    console.log(resource)

    useEffect(()=>{
        dispatch(getOneResource(id))
    },[dispatch, id])

    if(!resource){
        return 'loading...'
    }

    let imageContent;
    
    if(resource.image === null){
        imageContent = resourceImages[resource.catName]
    }
    else{
        imageContent = resource.image
    }

    
    console.log(imageContent)

    return(
        <div className='standard-card'>
            <h2>Name: {resource.name}</h2>

            <img css={{maxWidth: "100px"}} src={`${imageContent}`} alt={resource.catName}/>
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