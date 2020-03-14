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
import Contact from './component/Contact';
import Service from './component/Service';
import configureStore from './redux/store'
import * as serviceWorker from './serviceWorker';
import Skeleton from "./component/Skeleton";
import BookingStatus from "./component/BookingStatus";

const routing = (
    <Provider store={configureStore()}>
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/detail' component={Skeleton}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/Services' component={Service}/>
                <Route exact path='/status' component={BookingStatus} />
            </Switch>
        </Router>
    </Provider>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
