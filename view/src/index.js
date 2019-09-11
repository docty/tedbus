import React from 'react';
import ReactDOM from 'react-dom';
import './Style/bootstrap.min.css';
import './Style/styles.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import HomePage from './component/HomePage';

import Personal from './component/Personal';
import Payment from './component/Payment';

import * as serviceWorker from './serviceWorker';
import Skeleton from "./component/Skeleton";

const routing = (
    <Router>
        <Switch>
            <Route exact path='/' component={HomePage}/>
             <Route exact path='/detail' component={Skeleton}/>
             <Route exact path='/personal' component={Personal}/>
             <Route exact path='/payment' component={Payment}/>
        </Switch>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
