/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { getPostedResources } from "../../store/resources"
import { Link } from "react-router-dom";

const PostedResources = () => {
    const userId = useSelector(state => state.session.user.id)

    const dispatch = useDispatch();

    const resources = useSelector(state => Object.values(state.resources.postedResources))

    useEffect(() => {
        dispatch(getPostedResources(userId))
    }, [dispatch, userId])

    if(!resources){
        return(
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h1>Your Posted Resources:</h1>
            <div>
                {resources.map(resource => {
                    return <Link to={`/resources/${resource.id}`} key={resource.id} className='standard-card'>
                        <h2>{resource.name}</h2>
                        <img src={resource.image} alt={resource.catName} />
                        <p>{resource.description}</p>
                        <p>{resource.location.name}</p>
                    </Link>
                })}
            </div>
        </div>
    )
};

export default PostedResources;
