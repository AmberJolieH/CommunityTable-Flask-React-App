/** @jsx jsx */
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { jsx } from "@emotion/react";
import { listResources } from "../../store/resources"

const Resources = () =>{
    const dispatch = useDispatch()
    let resources = useSelector(state => state.resources)

    useEffect(()=>{
        dispatch(listResources())
    },[dispatch])

    if(!resources){
        return null;
    }

    return (
        <div>
            <h1>this is functional</h1>
            <p> will be adding a list of resources here</p>
        </div>
    )
}

export default Resources;