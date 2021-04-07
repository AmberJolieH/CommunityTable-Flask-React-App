const LOAD = 'resources/LOAD'
const ONE = 'resources/ONE'

const load = list => ({
    type: LOAD,
    list
});
const one = resource => ({
    type: ONE,
    resource
})

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
        headers: {
            'Content-Type': 'application/json'
        },
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
    if(!resource.errors){
        dispatch(one(resource))
    }
    else {
        return {'error': ['Resource not created. Please try again.']}
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

const initialState = {};

const resourceReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case LOAD:
            const resourceList = {};
            action.list.resources.forEach(resource => {
                resourceList[resource.id] = resource
            });
            newState = resourceList
            return newState;

        case ONE:

            newState[action.resource.id] = action.resource
            return newState;

        default:
            return newState;
    }

};

export default resourceReducer;
