/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { getPostedResources } from "../../store/resources"
import { useParams } from "react-router-dom";

const PostedResources = () => {
    const userId = useSelector(state => state.session.user.id)

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getPostedResources(userId))
    // }, [dispatch, userId])

    return (
        <h1>This is the posted resources page</h1>
    )
};

export default PostedResources;
