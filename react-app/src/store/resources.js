const LOAD = 'resources/LOAD'
const ONE = 'resources/ONE'
const POSTED = 'resources/POSTED'
const CLAIMED = 'resources/CLAIMED'

const load = list => ({
    type: LOAD,
    list
});

const one = resource => ({
    type: ONE,
    resource
});

const posted = list => ({
    type: POSTED,
    list
});

const claimed = list => ({
    type: CLAIMED,
    list
})
export const addAddress =  async ({address, lat, lng}) => {
    const response = await fetch('/api/locations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({address, lat, lng})
    })
    return await response.json()
}

export const updateResource = ({id, name, description, image, quantity, catName, startsAt, endsAt, locationId }) => async dispatch => {
    const form = new FormData()
    form.append('name', name)
    form.append('description', description)
    form.append('image', image)
    form.append('quantity', quantity)
    form.append('catName', catName)
    form.append('startsAt', startsAt)
    form.append('endsAt', endsAt)
    form.append('locationId', locationId)
    const response = await fetch(`/api/resources/${id}`, {
        method: 'PUT',
        body: form
    })
    const resource = await response.json()
    if (!resource.errors) {
        dispatch(one(resource))
    }
    else {
        return { 'error': ['Resource not created. Please try again.'] }
    }
    return resource;
}

export const createresource = ({ name, description, image, quantity, catName, startsAt, endsAt, locationId }) => async dispatch => {
    const form = new FormData()
    form.append('name', name)
    form.append('description', description)
    form.append('image', image)
    form.append('quantity', quantity)
    form.append('catName', catName)
    form.append('startsAt', startsAt)
    form.append('endsAt', endsAt)
    form.append('locationId', locationId)
    const response = await fetch('/api/resources/create_resource', {
        method: 'POST',
        body: form
    })
    const resource = await response.json();
    if (!resource.errors) {
        dispatch(one(resource))
    }
    else {
        return { 'error': ['Resource not created. Please try again.'] }
    }
    return resource;
}


export const listResources = () => async dispatch => {
    const response = await fetch('/api/resources/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const list = await response.json();
    dispatch(load(list))
};

export const getCategories = (id) => async dispatch => {
    const response = await fetch(`/api/resources/categories/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}

export const claimResource = (resourceId, quantity) => async dispatch => {
    const response = await fetch(`/api/resources/claim`, {
        method: 'POST',
        body: JSON.stringify({ quantity, resourceId }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await response.json();
    // claiming a resource will return the updated resource, which will update the resourceList state, specifically the quanity
    // so the one action can be dispatched to update(override) the resource in our state
    // will also need a thunk from users(?) to grab all resource with claim status equal to the user ID
    // if(res.ok){
    //     dispatch(one(res))
    // }
    return res;
}

const initialState = { list: {}, postedResources: {}, claimedResources: {} };

export const getPostedResources = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}/posted_resources`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const postedResources = await response.json();
    dispatch(posted(postedResources))
}

export const getClaimedResources = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}/claimed_resources`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const claimedResources = await response.json();
    dispatch(claimed(claimedResources))
}

const resourceReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case LOAD:
            const resourceList = {};
            action.list.resources.forEach(resource => {
                resourceList[resource.id] = resource
            });
            newState.list = resourceList
            return newState;

        case ONE:
            newState.list[action.resource.id] = action.resource
            return newState;
        case POSTED: {
            const postedResources = {};
            action.list.posted_resources.forEach(resource => {
                postedResources[resource.id] = resource
            });
            newState.postedResources = postedResources;
            return newState;
        }
        case CLAIMED: {
            const claimedResources = {};
            action.list.claimed_resources.forEach(resource => {
                claimedResources[resource.id] = resource
            });
            newState.claimedResources = claimedResources;
            return newState;
        }
        default:
            return newState;
    }

};

export default resourceReducer;
