import React, { useState, useEffect } from 'react';

import './DisplayHours.style.css';

export const DisplayHours = () => {
	const [totalHours, setTotalHours] = useState();
	const [error, setError] = useState();

	const loadTotals = async () => {
		const res = await fetch('api/hours');
		if (!res.ok) {
			setError(`Something went wrong ${res.url}: ${res.statusText}`);
			console.log(error);
		}
		const json = await res.json();
		setTotalHours(json);
	};

	useEffect(loadTotals, []);

	if (error) {
		return <div>Error happened</div>;
	}
	if (!totalHours) {
		return <div>..Loading</div>;
	}

	return (
		<>
			<div>
				<div className={'DHContainer'}>
					{totalHours.map((card) => (
						<div className={'cardContainer'}>
							<h2 className={'cardLocation'}>{card.location}</h2>
							<h2 className={'cardName'}>{card.name}</h2>
							<p className={'cardHours'}>Hours {card.hours}</p>
							<p className={'cardSalary'}>
								Salary: {card.salary},-
							</p>
							<p className={'cardDate'}>{card.date}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
