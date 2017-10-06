import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Link, HashRouter} from 'react-router-dom';
import configureStore from '../redux/store';
import { Provider, connect } from 'react-redux';
import Landing from './components/Landing.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import About from './components/About.jsx';
import Nav from './components/Nav.jsx';

let store = configureStore();

render(
  <Provider store = {store}>
    <HashRouter>
      <div>        
        <div className="logo">Blogger</div>
        <hr />
        <Nav />
        <Route exact path="/" component={() => {
          return <Landing />;
        }} />
        <Route exact path="/signup" component={() => {
          return <Signup />;
        }} />
        <Route exact path="/signin" component={()=> {
          return <Signin />;
        }} />
        <Route exact path="/:username/about" component={() => {
          return <About />;
        }} />
      </div>
    </HashRouter>
  </Provider>, 
  document.getElementById('app')
);

