/** @jsx jsx */
import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
import { jsx } from "@emotion/react";
import { listresources } from "../../services/resourses"

const Resources = () =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(listresources())
    },[dispatch])

    return (
        <div>
            <h1>this is functional</h1>
            <p> will be adding a list of resources here</p>
        </div>
    )
}

export default Resources;