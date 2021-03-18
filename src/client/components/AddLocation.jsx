import React from 'react';
import { useState } from 'react';

export const AddLocation = () => {
	const [name, setName] = useState('');
	const [category, setCategory] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('submitting ', { name: name });
		await fetch('/api/locations', {
			method: 'POST',
			body: JSON.stringify({ name: name, category: category }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		e.target.reset();
		setName('');
		setCategory(null);
	};

	return (
		<>
			<h2>
				Name: {name} <br /> Category: {category}{' '}
			</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Location:
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
					Category:
					<input
						type="text"
						name="category"
						onChange={(event) => {
							setCategory(event.target.value);
						}}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};
