import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Example from './Example';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Provider store={store}>
    <div>
        <Container>
            <Header/>
            <Example />
            <Footer/>
          </Container>

       </div> 
    </Provider>
  </Router>
  
);

export default App;
