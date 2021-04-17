import React, { useState } from 'react';
import './DisplayUsers.style.css';
import { LoadLocations } from './LoadLocations';
import { AddUser } from './AddUser';

export const DisplayUsers = (props) => {
	const [state, setState] = useState('USERS');
	const [user, setUser] = useState('');

	const onclick = (u) => {
		setUser(u);
		changeDisplay();
	};

	const changeDisplay = () => {
		if (state === 'LOCATIONS') {
			setState('USERS');
		}
		if (state === 'USERS') {
			setState('LOCATIONS');
		}
	};

	return (
		<>
			{state === 'USERS' && (
				<div>
					<h1 className="header">Choose user</h1>
					<div className="DisplayUsers">
						{props.users.map((user) => (
							<div
								className="UserCardContainer"
								onClick={() => {
									onclick(user);
								}}
								key={user.id}
							>
								<h1>{user.name}</h1>
							</div>
						))}
					</div>
					<AddUser />
				</div>
			)}
			{state === 'LOCATIONS' && (
				<LoadLocations user={user} onclick={changeDisplay} />
			)}
		</>
	);
};
