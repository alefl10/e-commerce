import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/* *** COMPONENTS *** */
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Auth from './pages/Auth/Auth';

/* *** ACTIONS *** */
import { setCurrentUser } from './redux/user/userActions';

/* *** STYLES *** */
import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;


	componentDidMount() {
		const { setCurrentUser } = this.props;
		// auth allows us to know when a user has been signed in without re-mounting the component
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// We subscribe to the userRef to listen to any changes to that user's data
				userRef.onSnapshot(snapShot => {
					const { id } = snapShot;
					setCurrentUser({
						id,
						...snapShot.data(),
					});
				});
			} else {
				// If userAuth is null we assign it to current user (not logged in)
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		// Free App's memory once a user signs out
		this.unsubscribeFromAuth();
	}


	render() {
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
}

App.propTypes = {
	setCurrentUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
