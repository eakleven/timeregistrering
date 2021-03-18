import React from 'react';
import './DisplayUsers.style.css';

export const DisplayUsers = (props) => {
	const klikk = () => {
		alert('Bæsj');

		return <FormHours />;
	};

	return (
		<>
			<div className="DisplayUsers">
				{props.users.map((user) => (
					<div className="UserCardContainer" onClick={klikk}>
						<h1>{user.name}</h1>
					</div>
				))}
			</div>
		</>
	);
};
