import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
// import './assets/css/reset.scss';
// import './assets/css/index.scss';
const App = () => (
  <>
    <Routes />
  </>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);




