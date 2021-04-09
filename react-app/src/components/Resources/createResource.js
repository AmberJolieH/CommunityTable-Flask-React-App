/** @jsx jsx */
import React, {useState} from "react";
import { jsx } from "@emotion/react";
import { createresource, addAddress, updateResource } from "../../store/resources";
import { useDispatch } from "react-redux";
import {  useHistory } from 'react-router-dom';
import PlacesAutocomplete from "../SplashPage/usePlacesAutoComplete";
import { getLatLng, getGeocode } from "use-places-autocomplete";

const CreateResource = ({resource}) =>{
    const dispatch = useDispatch();
    let nameContent;
    let descriptionContent;
    let imageContent;
    let quantityContent;
    let startsContent;
    let endsContent;
    let addressContent;
    let catContent;



    if(resource){
        nameContent = resource.name
        descriptionContent = resource.description
        imageContent = resource.image
        quantityContent = resource.quantity
        startsContent = resource.startsAt
        endsContent = resource.endsAt
        addressContent = resource.location.address
        catContent = resource.catName
    }
    if(!resource) {
        nameContent = ''
        descriptionContent = ''
        imageContent = ''
        quantityContent= ''
        startsContent = ''
        endsContent = ''
        addressContent = ''
        catContent = ''
    }
    const [name, setName] = useState(nameContent)
    const [description, setDescription] = useState(descriptionContent)
    const [image, setImage] = useState(imageContent)
    const [quantity, setQuantity] = useState(quantityContent)
    const [startsAt, setStartsAt] = useState(startsContent)
    const [endsAt, setEndsAt] = useState(endsContent)
    const [address, setAddress] = useState(addressContent)
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onSubmit = async (e)=>{
        e.preventDefault()
        let latitude;
        let longitude;
        try{
            const geocodedAddress = await getGeocode({ address });
            const latlng = await getLatLng(geocodedAddress[0]);
            const { lat, lng } = latlng;
            latitude = lat;
            longitude = lng;
        } catch(error){
            console.log("error", error)
        }
        const loc = await addAddress({address, latitude, longitude})
        const locationId = loc.location.id
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
    const [catName, setCatName] = useState(catContent)

    const onEdit = async (e) => {
        e.preventDefault()
        const id = resource.id
        const geocodedAddress = await getGeocode({ address });
        const latlng = await getLatLng(geocodedAddress[0]);
        const { lat, lng } = latlng;
        const loc = await addAddress({ address, lat, lng })
        const locationId = loc.location.id
        const updatedResource = await dispatch(updateResource({ id, name, description, image, quantity, catName, startsAt, endsAt, locationId }))
        if (!updatedResource.error) {
            history.push(`/posted_resources`)
        } else {
            setErrors(updatedResource.error);
        }
    }

    let buttonContent;
    if(resource){
        buttonContent = (
            <button
                onClick={onEdit}
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
            >Edit Resource</button>
        )
    }
    if(!resource){
        buttonContent = (
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
        )
    }

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
                {resource &&
                <img src={resource.image} alt={resource.name} style={{
                    maxWidth: '8rem'
                }}/>
                }
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
                <label>Pick-up location: </label>
                <PlacesAutocomplete setAddress={setAddress} address={address} />
                {buttonContent}
            </form>
        </div>
    )
}

export default CreateResource;
