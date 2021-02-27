const LOAD = 'resources/LOAD'
const ONE = 'resources/ONE'

const load = list => ({
    type: LOAD,
    list
});

const one = resource =>({
    type: ONE,
    resource
});

export const listResources = () => async dispatch => {
    const response = await fetch('/api/resources', {
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

const initialState = {
    list: []
};

const resourceReducer = (state= initialState, action) =>{
    switch(action.type){
        case LOAD: {
            const resourceList = {};
            action.list.resources.forEach(resource =>{
                resourceList[resource.id] = resource
            });
            return {
                ...resourceList,
                ...state,
                list: action.list
            } 
        }
        case ONE:{
            if(!state[action.resource.id]){
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
        default:
            return state;
    }

};

export default resourceReducer;