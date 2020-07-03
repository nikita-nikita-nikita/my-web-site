import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";

import 'semantic-ui-css/semantic.min.css';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

serviceWorker.unregister();
