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
    console.log(response)
    return await response.json();
}

