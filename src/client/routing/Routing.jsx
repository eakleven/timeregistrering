import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home } from "../pages/Home"
import { LoadLocations } from '../components/LoadLocations';
import { DisplayHours } from '../components/DisplayHours';
import MainNavigation from '../components/shared/MainNavigation';

const Routing = () => {
    const notFound = () => {
        return (
            <div>
                <h2>NOT FOUND: 404</h2>
                <p>ERROR: the page you requested is not available.</p>
                <h4>Min 404</h4>
            </div>
        );
    };
    return (
        <BrowserRouter>
            <div className={'firstHeader'}>
                <nav>
                    <Link className={'navbar'} to={'/'}>
                        Home
                    </Link>
                    <Link className={'navbar'} to={'/locations'}>
                        Steder
                    </Link>
                    <Link className={'navbar'} to={'/Hours'}>
                        DisplayHours
                    </Link>
                </nav>
                <h1 className={'firstHeaderText'}>Arbeidstimer</h1>
            </div>
            {/* <MainNavigation /> */}

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/hours" component={DisplayHours} />
                <Route exact path="/locations" component={LoadLocations} />

                <Route component={notFound} />
            </Switch>

        </BrowserRouter>);
};

export default Routing;
