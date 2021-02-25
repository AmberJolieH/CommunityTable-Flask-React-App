/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { getOneResource } from "../../store/resources"
import { useParams } from "react-router-dom";

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
    return(
        <p>{resource.name + resource.id}</p>
    )
}

export default ResourceDetail;