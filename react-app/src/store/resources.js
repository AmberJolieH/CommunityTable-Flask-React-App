const LOAD = 'resources/LOAD'
const ONE = 'resources/ONE'
const POSTED = 'resources/POSTED'

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
})

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

export const getOneResource = (id) => async dispatch => {
    const response = await fetch(`/api/resources/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resource = await response.json()
    dispatch(one(resource))
};

export const getCategories = (id) => async dispatch => {
    const response = await fetch(`/api/categories/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}

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

const initialState = {
    list: []
};

const resourceReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const resourceList = {};
            action.list.resources.forEach(resource => {
                resourceList[resource.id] = resource
            });
            return {
                ...resourceList,
                ...state,
                list: action.list
            }
        }
        case ONE: {
            if (!state[action.resource.id]) {
                const newState = {
                    ...state,
                    [action.resource.id]: action.resource
                }
                const resourceList = newState.list.map(id => newState[id])
                resourceList.push(action.resource)
                newState.list = resourceList
                return newState
            }
        }
        case POSTED: {
            const postedResources = {};
            action.list.posted_resources.forEach(resource => {
                postedResources[resource.id] = resource
            });
            return {
                ...postedResources,
                ...state,
                list: action.list
            }
        }
        default:
            return state;
    }

};

export default resourceReducer;
