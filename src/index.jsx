import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Home} from './home'

import {Punch} from './punch';

const notFound = () => {
    return (
        <div>
            <h2>NOT FOUND: 404</h2>
            <p>
                ERROR: the page you requested is not available.
            </p>
            <h4>Min 404</h4>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/punch" component={Punch}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={notFound}/>
                </Switch>

            </div>

        </BrowserRouter>



    );
};

ReactDOM.render(<App/>, document.getElementById("root"));


