import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './container/home';
import Layout from "./hoc/Layout";


const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Layout>
    );
};

export default Routes;
