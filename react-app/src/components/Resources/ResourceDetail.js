/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { getOneResource } from "../../store/resources"
import { useParams } from "react-router-dom";
import resourceImages from "./resourceImages"

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
    const imageFinder = () =>{
        if(!resource.image){
            return imageContent = resourceImages[resource.catName]
        }
        else{
            return imageContent = resource.image
        }
    }
    return(
        <div className='standard-card'>
            <h2>Name: {resource.name}</h2>

            <img src={`${imageContent}`} />
            <p>Description: {resource.description}</p>
            <p>Category: {resource.catName}</p>
            <p>Location: {resource.locationId}</p>
            <p>Quantity: {resource.quantity}</p>
            <p>Starts At: {resource.startsAt}</p>
            <p>Ends At: {resource.endsAt}</p>
            <p>Poster: {resource.posterId}</p>
        </div>
    )
}

export default ResourceDetail;