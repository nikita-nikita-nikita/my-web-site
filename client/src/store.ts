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
import {initialStateLinksType} from "../src/containers/Links/reducer";

import TechnologiesReducer from "../src/containers/Technologies/reducer";
import LinksReducer from "../src/containers/Links/reducer"

export const history = createBrowserHistory();

const initialState = {};

const middlewares = [
    thunk,
    routerMiddleware(history)
];

const reducers = {
    technologies:TechnologiesReducer,
    links:LinksReducer
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
    links:initialStateLinksType
    router:any
}

export default store;
