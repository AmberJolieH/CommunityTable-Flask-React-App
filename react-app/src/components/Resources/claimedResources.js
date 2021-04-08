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

    const resources = useSelector(state => Object.values(state.resources.claimedResources))

    if (!resources) {
        return (
            <div>Loading...</div>
        )
    };

    return (
        <div>
            <h1>Your Claimed Resources:</h1>
            <div>
                {resources.map(resource => {
                    return <Link to={`/resources/${resource.id}`} key={resource.id} className='standard-card'>
                        <h2>{resource.name}</h2>
                        <img src={resource.image} alt={`${resource.catName1} resource`} />
                        <p>{resource.description}</p>
                        <p>{resource.location.name}</p>
                        <p>{resource.quantity}</p>
                    </Link>
                })}
            </div>
        </div>
    )
};

export default ClaimedResources;
