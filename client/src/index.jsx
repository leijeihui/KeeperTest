import React from 'react';
import { render } from 'react-dom';
import Landing from './components/Landing.jsx';
import {BrowserRouter as Router, Route, Link, HashRouter} from 'react-router-dom';

render(
  <HashRouter>
    <div>
      <Route exact path="/" component={() => {
        return <Landing />;
      }} />
    </div>
  </HashRouter>, 
  document.getElementById('app')
);