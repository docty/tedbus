import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './Style/bootstrap.min.css';
import './Style/templatemo-finance-business.css';
import './Style/owl.css';
import './Style/fontawesome.css';
import './Style/styles.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import HomePage from './component/HomePage';
import About from './component/About';
import configureStore from './redux/store'
import * as serviceWorker from './serviceWorker';
import Skeleton from "./component/Skeleton";

const routing = (
    <Provider store={configureStore()}>
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/about' component={About}/>
                 <Route exact path='/detail' component={Skeleton}/>

            </Switch>
        </Router>
    </Provider>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
