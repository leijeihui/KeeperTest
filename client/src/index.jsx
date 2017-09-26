import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Link, HashRouter} from 'react-router-dom';
import configureStore from '../redux/store';
import { Provider, connect } from 'react-redux';
import Landing from './components/Landing.jsx';
import Signup from './components/Signup.jsx';

let store = configureStore();

render(
  <Provider store = {store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={() => {
          return <Landing />;
        }} />
        <Route exact path="/signup" component={() => {
          return <Signup />;
        }} />
      </div>
    </HashRouter>
  </Provider>, 
  document.getElementById('app')
);

