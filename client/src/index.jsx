import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Link, HashRouter} from 'react-router-dom';
import configureStore from '../redux/store';
import { Provider, connect } from 'react-redux';
import Landing from './components/Landing.jsx';

let store = configureStore();

render(
  <Provider store = {store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={() => {
          return <Landing />;
        }} />
      </div>
    </HashRouter>
  </Provider>, 
  document.getElementById('app')
);

