/** @jsx jsx */
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { jsx } from "@emotion/react";
import { listResources } from "../../store/resources";
import resourceImages from "./resourceImages"
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
        <div
        css={{
            display:'grid',
            gridTemplateColumns: '18% 18% 18% 18% 18%',
            padding: '2rem',
    
        }}>
            {cats.map((cat, i)=> (
                    <Link
                    css={{
                        display:'flex',
                        flexDirection:'column',
                        margin:'4rem',
                        width: '100%',
                        alignItems: 'center',
                        fontSize: '1.2rem',
                        color:'black',
                        fontFamily: 'monospace',
                        textDecoration: 'none',
                        textAlign:'center'
                    }}>
                        <img src={resourceImages[cat]} alt={cat} css={{
                            maxWidth:'80px'
                        }}/>
                        <p key={cat} to={`/resources/categories/${i + 1}`}>
                            {cat}
                        </p>
                    </Link>
                )
            )}
        </div>
    )
}

export default Resources;
