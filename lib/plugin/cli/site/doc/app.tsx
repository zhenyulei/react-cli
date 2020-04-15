
// import copy from 'clipboard';
import 'highlight.js/styles/github.css';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import { isMobile } from './asset/js/utils.js';

if (isMobile) {
  location.replace('demo.html' + location.hash);
}

render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('doc')
);





