const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};

export const login = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const user = await response.json()
    dispatch(setUser(user));
    return user
};

// export const restoreUser = () => async dispatch => {
//     const res = await fetch('/api/auth');
//     dispatch(setUser(res.data.user));
//     return res;
// };

export const signup = (user) => async (dispatch) => {
    const { username, email, password, firstname, lastname, isOrg, phonenumber } = user;
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password,
            firstname,
            lastname,
            isOrg,
            phonenumber,
        }),
    });
    dispatch(setUser(response.data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await fetch('/api/auth/logout', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};

const initialState = {
    user: {
        email: 'initial@email.com',
        username: 'Initial',
    }
};

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
