import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './Resources/css/styles.css';
import Routes from './Routes';

const App = (props) => (
  <BrowserRouter>
    <Routes {...props} />
  </BrowserRouter>
);


ReactDOM.render(<App />, document.getElementById('root'));
