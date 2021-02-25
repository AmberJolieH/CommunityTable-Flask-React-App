/** @jsx jsx */
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { jsx } from "@emotion/react";
import { listResources } from "../../store/resources"
import ResourceDetail from './ResourceDetail'
import { Link } from "react-router-dom";

const Resources = () =>{
    const dispatch = useDispatch()
    let resources = useSelector(state => state.resources.list.resources)

    useEffect(()=>{
        dispatch(listResources())
    },[dispatch])

    if(!resources){
        return null;
    }

    return (
        <div>
            <h1>this is functional</h1>
            {resources.map(resource =>(
                <Link key={resource.id} to={`/resources/${resource.id}`}>{resource.name + resource.id}</Link>
            ))}
            <p> will be adding a list of resources here</p>
        </div>
    )
}

export default Resources;