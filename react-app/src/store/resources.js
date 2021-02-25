const LOAD = 'resources/LOAD'

const load = list => ({
    type: LOAD,
    list
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
        default:
            return state;
    }

};

export default resourceReducer;