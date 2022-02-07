import React from 'react';
import ReactDOM from 'react-dom';
import Routing from "./routing/Routing"
//import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



const App = () => {
	return (
		<Routing />
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
