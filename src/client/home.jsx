import React, { useEffect, useState } from 'react';
import { DisplayUsers } from './components/DisplayUsers';

export const Home = () => {
	const [users, setUsers] = useState();
	const [error, setError] = useState();

	const loadUsers = async () => {
		const res = await fetch('api/users');
		if (!res.ok) {
			setError(`Something went wrong ${res.url}: ${res.statusText}`);
			console.log(error);
		}
		const json = await res.json();
		console.log(json);
		setUsers(json);
	};

	useEffect(loadUsers, []);

	if (error) {
		return <div>Error happened</div>;
	}

	if (!users) {
		return <div>..loading</div>;
	}

	return (
		<>
			<DisplayUsers users={users} />
		</>
	);
};
