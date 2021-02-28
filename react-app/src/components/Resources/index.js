/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { listResources } from "../../store/resources";

import { Link } from "react-router-dom";


const Resources = () => {
    const dispatch = useDispatch()
    let resources = useSelector(state => state.resources.list.resources)

    useEffect(() => {
        dispatch(listResources())
    }, [dispatch])

    if (!resources) {
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

    return (
        <div>
            <h1
                css={{
                    color: 'rgb(149, 181, 60)',
                    textAlign: 'center'
                }}> Resource Categories </h1>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '18% 18% 18% 18% 18%',
                    padding: '2rem',

                }}>
                {cats.map((cat, i) => (
                    <Link
                        to={`/resources/categories/${i + 1}`}
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '4rem',
                            width: '100%',
                            alignItems: 'center',
                            fontSize: '1.2rem',
                            color: 'black',
                            fontFamily: 'monospace',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}>
                        <img src={componentMap[cat]} alt={cat} css={{
                            maxWidth: '90%',
                            borderRadius: '100%',
                            margin: '1rem'
                        }} />
                        <p key={cat} >
                            {cat}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Resources;
