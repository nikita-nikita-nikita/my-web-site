import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from "./pages/Home";

const root = document.getElementById('root');

ReactDOM.render(<Home />, root);

serviceWorker.unregister();
