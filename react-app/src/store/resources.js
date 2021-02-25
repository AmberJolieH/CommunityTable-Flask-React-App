const LOAD = 'resources/LOAD'

const load = resources => ({
    type: LOAD,
    resources
});

export const listResources = () => async dispatch => {
    const response = await fetch('/api/resources', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resources = await response.json();
    console.log(resources)
    dispatch(load(resources))
};

const initialState = {
    resources: []
};

const resourceReducer = (state= initialState, action) =>{
    switch(action.type){
        case LOAD: {
            const resourceList = {};
            action.resources.resources.forEach(resource =>{
                resourceList[resource.id] = resource
            });
            return {
                ...resourceList,
                ...state
            } 
        }
        default:
            return state;
    }

};

export default resourceReducer;