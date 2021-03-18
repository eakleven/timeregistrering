import React from 'react';
import './DisplayLocations.style.css';
import { Location } from './location';

export const DisplayLocations = (props) => {
	return (
		<div className="DisplayLocations">
			{props.locations.map((location) => (
				<Location
					key={location.name + location.category}
					location={location}
					addLocations={props.addLocations}
				/>
			))}
		</div>
	);
};
