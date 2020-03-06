import { ROUTE, IS_LOGGED_IN } from './constants';

export const setRoute = (route) => ({
    type: ROUTE,
    payload: route
});

export const logIn = (check) => ({
    type: ROUTE,
    payload: check
});