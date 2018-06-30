import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetCard } from './store/card';


import App from './app';

import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();
console.log("store is created");
store.dispatch(GetCard())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/home" component={App} />
                <Route path="/TvSHows" component={App} />
                <Route path="/Movies" component={App} />
            </div>
        </Router>
    </Provider>,
   document.getElementById('root')
)