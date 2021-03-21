import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

export const FormHours = (props) => {
	const [name, setName] = useState();
	const [location, setLocation] = useState();
	const [startDate, setDate] = useState(new Date());
	const [wage, setWage] = useState();
	const [hours, setHours] = useState();

	useEffect(() => {
		setName(props.user.name);
		setLocation(props.location);
		setWage(props.user.wage);
	}, []);

	const formatDate = (e) => {
		e.preventDefault();
		console.log(startDate);
		const formated = format(startDate, 'dd/MM/yyyy');
		//Check state, format is set to DATE
		setDate(formated);
		console.log(startDate);
	};

	return (
		<>
			<div className={'FContainer'}>
				<div>{hours}</div>
				<div>
					<form onSubmit={formatDate}>
						<label>
							Set Date:
							<DatePicker
								dateFormat={'dd/MM/yyyy'}
								selected={startDate}
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
