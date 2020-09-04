import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from 'history';
import TechnologiesReducer, {initialStateTechnologiesType} from "../src/containers/Technologies/reducer";
import LinksReducer, {initialStateLinksType} from "../src/containers/Links/reducer";
import SWReducer, {initialStateSWType} from "./containers/SWContainer/reducer";
import ProfileReducer, {initialStateProfileType} from "./containers/AuthProfileContainer/reducer";
import {watchLoadData} from "./containers/SWContainer/sagas";
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
    starWars:SWReducer,
    profile:ProfileReducer
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
    profile:initialStateProfileType
    router:RouterState
}

export type MapStateToPropsType<T = rootStateType> = (state:rootStateType) => T;
export type GetRootStateType = () => rootStateType;

export default store;
