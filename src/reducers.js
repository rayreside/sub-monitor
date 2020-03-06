import { ROUTE, IS_LOGGED_IN } from './constants';

//reducers takes an action and outputs a state.
const initialState = {
    route: 'login',
    isLoggedIn: false,
    subList: [
        {
            id: 1,
            name: "Netflix",
            price: '$12.00'
        },
        {
            id: 2,
            name: "Crunchyroll",
            price: '$8.00'
        }
    ]
}

export const changeRoute = (state=initialState, action={}) => {
    switch(action.type) {
        case ROUTE:
            return { ...state, route: action.payload }
        default:
            return state;
    }
}

export const checkLogIn = (state=initialState, action={}) => {
    switch(action.type) {
        case IS_LOGGED_IN:
            return { ...state, isLoggedIn: action.payload }
        default:
            return state;
    }
}