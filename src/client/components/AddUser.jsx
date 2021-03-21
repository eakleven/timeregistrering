import React from 'react';
import { useState } from 'react';
import './AddUser.style.css';

export const AddUser = () => {
	const [name, setName] = useState('');
	const [wage, setWage] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('submitting ', { name });
		await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify({ name, wage }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		e.target.reset();
		setName('');
		setWage(null);
	};

	return (
		<>
			<div className={'AUContainer'}>
				<h2>
					Navn: {name} <br /> Lønn: {wage}{' '}
				</h2>
				<form onSubmit={handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							onChange={(event) => {
								setName(event.target.value);
							}}
						/>
					</label>
					<br />
					<label>
						Salary:
						<input
							type="text"
							name="salary"
							onChange={(event) => {
								setWage(event.target.value);
							}}
						/>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
};
