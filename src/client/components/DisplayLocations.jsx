import React, { useState } from 'react';
import './DisplayLocations.style.css';
import { FormHours } from './FormHours';
import { AddLocation } from './AddLocation';

export const DisplayLocations = (props) => {
	const [state, setState] = useState('LOCATIONS');
	const [location, setLocation] = useState();

	const onclick = (loc) => {
		setState('FORM');
		setLocation(loc);
	};

	return (
		<>
			{state === 'LOCATIONS' && (
				<div>
					<div className="DisplayLocations">
						{props.locations.map((location) => (
							<div className="container">
								<h1>{location.name}</h1>
								<div
									className={'button'}
									onClick={() => {
										onclick(location.name);
									}}
								>
									Add hours
								</div>
							</div>
						))}
					</div>
					<AddLocation />
				</div>
			)}
			{state === 'FORM' && (
				<FormHours user={props.user} location={location} />
			)}
		</>
	);
};
