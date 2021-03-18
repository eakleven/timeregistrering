import React from 'react';

import './UserCard.style.css';

export const UserCard = (props) => {
	const klikk = () => {
		alert('Bæsj');

		return <FormHours />;
	};

	return (
		<>
			<div className="UserCardContainer" onClick={klikk}>
				<h1>{props.user.name}</h1>
			</div>
		</>
	);
};
