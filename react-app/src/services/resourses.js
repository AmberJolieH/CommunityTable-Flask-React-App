export const createresource = async ({name, description, image, quantity, catName, startsAt, endsAt, locationId}) => {
    const response = await fetch('/api/resources/create_resource', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
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
    })
    return await response.json();
}

export const listresources = async () =>{
    const response = await fetch('/api/resources', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}
export const getCategories = async (id) =>{
    const response = await fetch(`/api/categories/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}
