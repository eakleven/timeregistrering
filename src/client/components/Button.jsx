import React from 'react';
import './Button.style.css';

export const Button = (props) => {
	const onclick = () => {
		alert(props.location);
	};

	return (
		<div className="button" onClick={onclick}>
			<p className="text">Legg til timer</p>
		</div>
	);
};
