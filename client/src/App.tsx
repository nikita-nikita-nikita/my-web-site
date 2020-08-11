import React from "react";
import './App.scss';
// @ts-ignore
import { Provider } from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import Routing from "./containers/Routing"
import store, {history} from "./store";

const App:React.FC = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routing />
        </ConnectedRouter>
    </Provider>
);

export default App;
