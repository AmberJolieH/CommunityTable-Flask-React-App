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
                    padding: '2rem',

                }}
                >
                {resources.map(resource =>{
                    return <Link to={`/resources/${resource.id}`} key={resource.id} className='standard-card' css={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '1rem',
                        width: '100%',
                        alignItems: 'center',
                        fontSize: '1.2rem',
                        color: 'black',
                        fontFamily: 'monospace',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}>
                    <h2>{resource.name}</h2>
                    {/* <img css={{ maxWidth: "100px" }} src={`${imageContent}`} alt={resource.catName} /> */}  
                    <p>{resource.description}</p>
                    <p>{resource.location.name}</p>
                    </Link>
                })}

                </div>
        </div>
    )
}

export default ResourceCategories;