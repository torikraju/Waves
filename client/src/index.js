import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import './Resources/css/styles.css';
import Routes from './Routes';
import store from "./store/sotre";

const App = (props) => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes {...props} />
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(<App/>, document.getElementById('root'));
