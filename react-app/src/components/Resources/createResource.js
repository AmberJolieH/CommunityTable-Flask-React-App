/** @jsx jsx */
import React, {useState} from "react";
import { jsx } from "@emotion/react";
import { createresource } from "../../services/resourses";


const CreateResource = () =>{
    // posterId = useState(state => state.session.user.id)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [startsAt, setStartsAt] = useState('')
    const [endsAt, setEndsAt] = useState('')
    const [locationId, setLocationId] = useState(1)
    
    const onSubmit = async (e)=>{
        e.preventDefault()
        const resource = await createresource({
            // posterId,
            name,
            description,
            image,
            quantity,
            catName,
            startsAt,
            endsAt,
            locationId
        })
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
        <div>
            <h2>Create a Resource</h2>
            <p>Community, helping community.</p>     
            <form onSubmit={onSubmit}>
                <input 
                    name="name"
                    type="text"
                    placeholder="Name of resource"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <textarea
                    name="description"
                    placeholder="Enter a desription"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input
                    name="image"
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
                <input
                    name="quantity"
                    type="number"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
                <select
                    name="catName"
                    type=""
                    value={catName}
                    onChange={e => setCatName(e.target.value)}
                >
                {categories.map((cat)=> {
                    return (
                        <option
                        key={cat}
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
                <select
                    name="locationId"
                    type=""
                    value={locationId}
                    onChange={e => setLocationId(e.target.value)}
                >
                    {locations.map((location, i) => {
                        return (
                            <option
                                key={location}
                                value={i+1}
                            >
                                {location}
                            </option>
                        )
                    })}
                </select>
                <button>Create Resource</button>
            </form>
        </div>
    )
}

export default CreateResource;