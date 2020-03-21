import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* *** COMPONENTS *** */
import HomePage from './components/pages/HomePage';

import './App.css';

const HatsPage = () => (
	<h1>
		Hats Page
	</h1>
);

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
