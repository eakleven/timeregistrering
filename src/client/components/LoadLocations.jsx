import React, { useEffect, useState } from 'react';
import { DisplayLocations } from './DisplayLocations';

export const LoadLocations = (props) => {
	const [locations, setLocations] = useState();
	const [error, setError] = useState();
	const user = props.user;

	const loadLocations = async () => {
		const res = await fetch('api/locations');
		if (!res.ok) {
			const e = `Something went wrong ${res.url}: ${res.statusText}`;
			setError(e);
			console.log(error);
		}
		const json = await res.json();
		setLocations(json);
	};

	useEffect(loadLocations, []);

	if (error) {
		return <div>Error happened</div>;
	}

	if (!locations) {
		return <div>..Loading..</div>;
	}
	return (
		<>
			<button onClick={props.onclick}>Back</button>
			<h1 className="header">Timeregistrering</h1>
			<DisplayLocations locations={locations} user={user} />
		</>
	);
};
