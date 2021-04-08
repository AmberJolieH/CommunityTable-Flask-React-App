/** @jsx jsx */
import React, {useState} from "react";
import { jsx } from "@emotion/react";
import { createresource, addAddress } from "../../store/resources";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import PlacesAutocomplete from "../SplashPage/usePlacesAutoComplete";
import { getLatLng, getGeocode } from "use-places-autocomplete";

const CreateResource = () =>{
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [startsAt, setStartsAt] = useState('')
    const [endsAt, setEndsAt] = useState('')
    const [locationId, setLocationId] = useState(1)
    const [address, setAddress] = useState('')
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onSubmit = async (e)=>{
        e.preventDefault()
        const geocodedAddress = await getGeocode({ address });
        const latlng = await getLatLng(geocodedAddress[0]);
        const { lat, lng } = latlng;
        const loc = await addAddress({address, lat, lng})
        console.log('.......', loc)
        setLocationId(loc.id)
        const resource = await dispatch(createresource({
            name,
            description,
            image,
            quantity,
            catName,
            startsAt,
            endsAt,
            locationId
        }));
        if(!resource.error){
            history.push(`/resources/${resource.id}`)
        } else{
            setErrors(resource.error);
        }

    }
    const categories = [
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
    const [catName, setCatName] = useState(categories[0])
    const locations = [
        'Goodwill',
        'Bethel Church of Houston',
        'University of Houston',
        'DownTown Houston'
    ]

    return (
        <div
        style={{
            display: "flex",
            flexDirection:"column",
            alignItems:"center",
            
            
        }}>
            <h2>Create a Resource</h2>
            {errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
            <p>Community, helping community.</p>
            <form
            onSubmit={onSubmit}
            className='standard-card'
            >
                <label>Name of resource: </label>
                <input
                    className='input__card'
                    name="name"
                    type="text"
                    placeholder="Name of resource"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label>Description: </label>
                <textarea
                    name="description"
                    placeholder="Enter a description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <label>Picture</label>
                <input
                    name="image"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <label>Enter quantity: </label>
                <input
                    name="quantity"
                    type="number"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
                <label>Select a category: </label>
                <select
                    name="catName"
                    type=""
                    value={catName}
                    onChange={e => setCatName(e.target.value)}
                >
                {categories.map((cat, index)=> {
                    return (
                        <option
                        key={index}
                        value={cat}
                        >
                            {cat}
                        </option>
                    )
                })}
                </select>
                <label>Resource Starts:</label>
                <input
                    name="startsAt"
                    type="date"
                    value={startsAt}
                    onChange={e => setStartsAt(e.target.value)}
                />
                <label>Resource Ends:</label>
                <input
                    name="endsAt"
                    type="date"
                    value={endsAt}
                    onChange={e => setEndsAt(e.target.value)}
                />
                <label>Add a location: </label>
                <PlacesAutocomplete setAddress={setAddress}/>
                {/* <select
                    name="locationId"
                    type=""
                    value={locationId}
                    onChange={e => setLocationId(e.target.value)}
                >
                    {locations.map((location, i) => {
                        return (
                            <option
                                key={i}
                                value={i+1}
                            >
                                {location}
                            </option>
                        )
                    })}
                </select> */}
                <button
                    css={{
                        backgroundColor: "rgb(149, 181, 60)",
                        borderRadius: "2rem",
                        padding: "0.75rem 1rem 0.75rem 1rem",
                        color: "white",
                        border: "0px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        "cursor": "pointer"
                    }}
                    >Create Resource</button>
            </form>
        </div>
    )
}

export default CreateResource;
