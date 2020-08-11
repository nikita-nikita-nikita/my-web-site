import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
// @ts-ignore
import { createBrowserHistory } from 'history';
import TechnologiesReducer, {initialStateTechnologiesType} from "../src/containers/Technologies/reducer";
import LinksReducer, {initialStateLinksType} from "../src/containers/Links/reducer";
import {watchLoadData} from "./containers/SWContainer/sagas";
import SWReducer, {initialStateSWType} from "./containers/SWContainer/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    thunk,
    sagaMiddleware,
    routerMiddleware(history)
];

const reducers = {
    technologies:TechnologiesReducer,
    links:LinksReducer,
    starWars:SWReducer
}

const composedEnhancers = composeWithDevTools(
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
sagaMiddleware.run(watchLoadData);

export type rootStateType = {
    technologies:initialStateTechnologiesType
    links:initialStateLinksType
    starWars:initialStateSWType
    router:any
}

export default store;
