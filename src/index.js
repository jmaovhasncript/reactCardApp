import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetCard } from './store/card';


import App from './app';

import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();

store.dispatch(GetCard())

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <App/>
        </Router>
    </Provider>,
   document.getElementById('root')
)