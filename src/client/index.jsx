import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home } from './home';
import { LoadLocations } from './components/LoadLocations';
import { DisplayHours } from './components/DisplayHours';

import './index.css';

const notFound = () => {
	return (
		<div>
			<h2>NOT FOUND: 404</h2>
			<p>ERROR: the page you requested is not available.</p>
			<h4>Min 404</h4>
		</div>
	);
};

const App = () => {
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
				<div className={'blackbox1'}></div>
				<div className={'blackbox2'}></div>
				<h1 className={'firstHeaderText'}>-Arbeid</h1>
			</div>

			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/hours" component={DisplayHours} />
					<Route exact path="/locations" component={LoadLocations} />

					<Route component={notFound} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
