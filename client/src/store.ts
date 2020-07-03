import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
// @ts-ignore
import { createBrowserHistory } from 'history';
import {initialStateTechnologiesType} from "../src/containers/Technologies/reducer";

import TechnologiesReducer from "../src/containers/Technologies/reducer"

export const history = createBrowserHistory();

const initialState = {};

const middlewares = [
    thunk,
    routerMiddleware(history)
];

const reducers = {
    technologies:TechnologiesReducer
}

const composedEnhancers = compose(
    applyMiddleware(...middlewares)
);

const rootReducer = combineReducers({
    router: connectRouter(history),
    ...reducers
});

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export type rootStateType = {
    technologies:initialStateTechnologiesType,
    router:any
}

export default store;
