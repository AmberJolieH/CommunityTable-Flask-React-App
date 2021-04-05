/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx } from "@emotion/react";
import { Link, useParams } from "react-router-dom";
import { getCategories } from "../../store/resources";
import { useDispatch } from "react-redux";

const ResourceCategories = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [resources, setResources] = useState('')

    useEffect(()=>{
        // IIFE to grab resources in the specified category
       (async() =>{
           const res = await dispatch(getCategories(id))
           setResources(res.resources)
       })()
    },[dispatch, id])

    const componentMap = {
        'Non-Perishable Food': "https://resourceimage.s3-us-west-2.amazonaws.com/cans.svg",
        'Perishable Food': "https://resourceimage.s3-us-west-2.amazonaws.com/parishable.svg",
        'Water and beverages': "https://resourceimage.s3-us-west-2.amazonaws.com/WATER.svg",
        'Baby care': "https://resourceimage.s3-us-west-2.amazonaws.com/diapers.svg",
        'Children toys': "https://resourceimage.s3-us-west-2.amazonaws.com/CHILDS-toys.svg",
        'Clothing': "https://resourceimage.s3-us-west-2.amazonaws.com/cloth.svg",
        'Electronics': "https://resourceimage.s3-us-west-2.amazonaws.com/elec.svg",
        'Books': "https://resourceimage.s3-us-west-2.amazonaws.com/books.svg",
        'School Supplies': "https://resourceimage.s3-us-west-2.amazonaws.com/schoolSupplies.svg",
        'Furniture': "https://resourceimage.s3-us-west-2.amazonaws.com/furn.svg",
        'Shelter': "https://resourceimage.s3-us-west-2.amazonaws.com/shelter.svg",
        'Services (Barber, shower, etc)': "https://resourceimage.s3-us-west-2.amazonaws.com/services.svg",
        'Other': "https://resourceimage.s3-us-west-2.amazonaws.com/etc.svg",
    };



    if(!resources || resources.length === 0){
        return (
        <div>
            <h1> We do not seem to have any resources here </h1>
            <Link to='/resources/create_resource'>Add a resource</Link>
        </div>
        )
    }

    return (
        <div>
            <h1
                css={{
                    color: 'rgb(149, 181, 60)',
                    textAlign: 'center'
                }}>
                {resources[0].catName} Resources
            </h1>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '18% 18% 18% 18% 18%',


                }}
                >
                {resources.map((resource, index) =>{
                    return <Link to={`/resources/${resource.id}`} key={resource.id} className='standard-card' css={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '2rem 4rem 2rem',
                        width: '80%',
                        fontSize: '1.2rem',
                        color: 'black',
                        fontFamily: 'monospace',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}>
                    <h2>{resource.name}</h2>
                    <img css={{ maxWidth: "30%" }} src={`${componentMap[resource.catName]}`} alt={resource.catName} />
                    <p>{resource.description}</p>
                    <p>{resource.location.name}</p>
                    </Link>
                })}

                </div>
        </div>
    )
}

export default ResourceCategories;
