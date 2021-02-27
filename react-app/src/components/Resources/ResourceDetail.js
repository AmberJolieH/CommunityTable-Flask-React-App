/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { getOneResource } from "../../store/resources"
import { useParams } from "react-router-dom";


const ResourceDetail = () =>{
    const dispatch = useDispatch();

    const {id} = useParams();
    const resource = useSelector(state => state.resources[id])


    useEffect(()=>{
        dispatch(getOneResource(id))
    },[dispatch, id])

    if(!resource){
        return 'loading...'
    }

    // let imageContent;
    
    // if(resource.image === null){
    //     imageContent = resourceImages[resource.catName]
    // }
    // else{
    //     imageContent = resource.image
    // }
    const cats = [
        'Non-Perishable Food',
        'Perishable Food',
        'Water and beverages',
        'Baby care',
        'Children toys',
        'Clothing',
        'Electronics',
        'Books',
        'School Supplies',
        'Furniture',
        'Shelter',
        'Services (Barber, shower, etc)',
        'Other'
    ]
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
    // console.log(imageContent)

    return(
        <div className='standard-card'>
            <h2>Name: {resource.name}</h2>

            <img css={{ maxWidth: "100px" }} src={componentMap[cat]}/>
            <p>Description: {resource.description}</p>
            <p>Category: {resource.catName}</p>
            <p>Location: {resource.location.name}</p>
            <p>Quantity: {resource.quantity}</p>
            <p>Starts At: {resource.startsAt}</p>
            <p>Ends At: {resource.endsAt}</p>
            {/* <p>Poster: {resource.user.name}</p> */}
        </div>
    )
}

export default ResourceDetail;