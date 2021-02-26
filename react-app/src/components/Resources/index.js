/** @jsx jsx */
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { jsx } from "@emotion/react";
import { listResources } from "../../store/resources"
import ResourceDetail from './ResourceDetail'
import { Link } from "react-router-dom";

const Resources = () =>{
    const dispatch = useDispatch()
    let resources = useSelector(state => state.resources.list.resources)
    
    useEffect(()=>{
        dispatch(listResources())
    },[dispatch])
    
    if(!resources){
        return null;
    }
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


    return (
        <div>
            <h1>this is functional</h1>
           
            {cats.map((cat, i)=> (
                    <div>
                        <img src='' alt='' />
                        <Link key={cat} to={`/resources/categories/${i + 1}`}>{cat}</Link>
                    </div>
                )
            )}

            <p> will be adding a list of resources here</p>
        </div>
    )
}

export default Resources;
