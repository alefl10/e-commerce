import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUserAction } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

/* *** FIREBASE *** */
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/* *** COMPONENTS *** */
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Auth from './pages/Auth/Auth';




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
		const { currentUser } = this.props;
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/signin" render={() => (currentUser ? (<Redirect to="/" />) : <Auth />)} />
				</Switch>
			</div>
		);
	}
}

App.propTypes = {
	setCurrentUser: PropTypes.func.isRequired,
	currentUser: PropTypes.shape(),
};

App.defaultProps = {
	currentUser: null,
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
