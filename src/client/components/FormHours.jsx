import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import './FormHours.style.css';

import 'react-datepicker/dist/react-datepicker.css';

export const FormHours = (props) => {
	const [name, setName] = useState();
	const [location, setLocation] = useState();
	const [date, setDate] = useState(new Date());
	const [wage, setWage] = useState();
	const [hours, setHours] = useState();

	useEffect(() => {
		setName(props.user.name);
		setLocation(props.location);
		setWage(props.user.wage);
	}, []);

	const postToServer = async (e) => {
		e.preventDefault();
		console.log('Submitting:', {
			name,
			wage,
			location,
			date: format(date, 'dd/MM/yyyy'),
			hours,
		});
		await fetch('/api/hours', {
			method: 'POST',
			body: JSON.stringify({
				name,
				wage,
				location,
				date: format(date, 'dd/MM/yyyy'),
				hours,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		setDate(null);
		setHours(null);
	};

	return (
		<>
			<div className={'FContainer'}>
				<div className={'FHeader'}>
					<h1>
						User: {name}
						<br />
						Location: {location}
					</h1>
				</div>
				<div className={'FForm'}>
					<form onSubmit={postToServer}>
						<label>
							Set Date:
							<DatePicker
								dateFormat={'dd/MM/yyyy'}
								selected={date}
								onChange={(date) => setDate(date)}
							/>
						</label>
						<label>
							Set hours:
							<input
								type={'text'}
								name={'hours'}
								onChange={(event) => {
									setHours(event.target.value);
								}}
							/>
						</label>
						<button type={'submit'}>Submit</button>
					</form>
				</div>
			</div>
		</>
	);
};
