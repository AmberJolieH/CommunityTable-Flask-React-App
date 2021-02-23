export const createresource = async () => {
    const response = await fetch('api/resources/create_resource', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            posterId,
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

