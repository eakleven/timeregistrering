import React from 'react';
import './DisplayLocations.style.css';
import { Button } from './Button';

export const DisplayLocations = (props) => {
	return (
		<div className="DisplayLocations">
			{props.locations.map((location) => (
				<div className="container">
					<h1>{location.name}</h1>
					<Button location={location.name} />
				</div>
			))}
		</div>
	);
};
