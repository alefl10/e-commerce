import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* *** COMPONENTS *** */
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Auth from './pages/Auth/Auth';

/* *** STYLES *** */
import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={Auth} />
			</Switch>
		</div>
	);
}

export default App;
