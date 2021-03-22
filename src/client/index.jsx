import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home } from './home';
import { LoadLocations } from './components/LoadLocations';
import { DisplayHours } from './components/DisplayHours';

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
			<nav>
				<Link to={'/'}>Home</Link>
				<Link to={'/Punch'}>Steder</Link>
				<Link to={'/Hours'}>DisplayHours</Link>
			</nav>
			<div>
				<Switch>
					<Route exact path="/punch" component={LoadLocations} />
					<Route exact path="/" component={Home} />
					<Route exact="/hours" component={DisplayHours} />

					<Route component={notFound} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
