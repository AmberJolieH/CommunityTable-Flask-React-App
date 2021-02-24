/** @jsx jsx */
import React, { useDispatch, useEffect } from "react";
import { jsx } from "@emotion/react";
import { listresources } from "../../services/resourses"

const Resources = () =>{
    // dispatch = useDispatch()
    // useEffect=()=>({
    //     listresources()
    // },[dispatch])

    return (
        <div>
            <h1>this is functional</h1>
            <p> will be adding a list of resources here</p>
        </div>
    )
}

export default Resources;