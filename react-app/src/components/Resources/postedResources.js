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

    // const componentMap = {
    //     'Non-Perishable Food': "https://resourceimage.s3-us-west-2.amazonaws.com/cans.svg",
    //     'Perishable Food': "https://resourceimage.s3-us-west-2.amazonaws.com/parishable.svg",
    //     'Water and beverages': "https://resourceimage.s3-us-west-2.amazonaws.com/WATER.svg",
    //     'Baby care': "https://resourceimage.s3-us-west-2.amazonaws.com/diapers.svg",
    //     'Children toys': "https://resourceimage.s3-us-west-2.amazonaws.com/CHILDS-toys.svg",
    //     'Clothing': "https://resourceimage.s3-us-west-2.amazonaws.com/cloth.svg",
    //     'Electronics': "https://resourceimage.s3-us-west-2.amazonaws.com/elec.svg",
    //     'Books': "https://resourceimage.s3-us-west-2.amazonaws.com/books.svg",
    //     'School Supplies': "https://resourceimage.s3-us-west-2.amazonaws.com/schoolSupplies.svg",
    //     'Furniture': "https://resourceimage.s3-us-west-2.amazonaws.com/furn.svg",
    //     'Shelter': "https://resourceimage.s3-us-west-2.amazonaws.com/shelter.svg",
    //     'Services (Barber, shower, etc)': "https://resourceimage.s3-us-west-2.amazonaws.com/services.svg",
    //     'Other': "https://resourceimage.s3-us-west-2.amazonaws.com/etc.svg",
    // };

    if(!resources){
        return(
            <div>Loading...</div>
        )
    }

    return (
        <div style={{marginBottom: "10rem"}}>
            <h1 style={{textAlign: "center"}}>Your Posted Resources:</h1>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '24% 24% 24% 24% ',
                }}
            >
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
                        <img css={{ maxWidth: "80%" }} src={`${resource.image}`} alt={resource.catName} />
                        <p>{resource.description}</p>
                        <p>{resource.location.name}</p>
                        <p>{resource.quantity}</p>
                    </Link>
                })}
            </div>
        </div>
    )
};

export default PostedResources;
