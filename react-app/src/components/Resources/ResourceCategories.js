/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { getOneResource } from "../../store/resources"
import { Link, useParams } from "react-router-dom";
import { getCategories } from "../../services/resourses";

const ResourceCategories = () => {
    const dispatch = useDispatch()
    const {id} = useParams();
    const [resources, setResources] = useState('')

    useEffect(()=>{
       const getCatRes= async() =>{
           const res = await getCategories(id)
           console.log('--------', res.resources)
           setResources(res.resources)
       } 
       getCatRes()
    },[])

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
            <h1>
                {resources[0].catName} Resources
            </h1>
            {resources.map(resource =>{
               return  <div key={resource.id} className='standard-card'>
                   <h2>{resource.name}</h2>
                   <p>{resource.location.name}</p>
                   </div>
            })}
        </div>
    )
}

export default ResourceCategories;