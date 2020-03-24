import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

/* *** COMPONENTS *** */
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Auth from './pages/Auth/Auth';

/* *** STYLES *** */
import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;

	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}


	componentDidMount() {
		// auth allows us to know when a user has been signed in without re-mounting the component
		auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		// Free App's memory once a user signs out
		this.unsubscribeFromAuth();
	}


	render() {
		const { currentUser } = this.state;
		return (
			<div>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={Auth} />
				</Switch>
			</div>
		);
	}
}

export default App;
