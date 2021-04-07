/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { getClaimedResources } from "../../store/resources"
import { Link, useParams } from "react-router-dom";

const ClaimedResources = () => {
    const userId = useSelector(state => state.session.user.id)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClaimedResources(userId))
    }, [dispatch, userId])

    // const resources = useSelector()

    return (
        <h1>This is the claimed Resources page</h1>
    )
};

export default ClaimedResources;
