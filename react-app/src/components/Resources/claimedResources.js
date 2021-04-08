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
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '24% 24% 24% 24% ',


                }}>
                {resources.map(resource => {
                    return <Link to={`/resources/${resource.id}`} key={resource.id} className='standard-card' css={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '2rem 2rem 2rem',
                        width: '90%',
                        fontSize: '1.2rem',
                        color: 'black',
                        fontFamily: 'monospace',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}>
                        <h2>{resource.name}</h2>
                        <img css={{ maxWidth: "80%" }} src={resource.image} alt={`${resource.catName1} resource`} />
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
