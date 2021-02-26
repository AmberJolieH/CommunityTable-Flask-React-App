/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { getOneResource } from "../../store/resources"
import { useParams } from "react-router-dom";
import { getCategories } from "../../services/resourses";

const ResourceCategories = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])

    return (
        <div>resource lists from categories</div>
    )
}

export default ResourceCategories;