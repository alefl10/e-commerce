import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelectors';

/* *** COMPONENTS *** */
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Auth from './pages/Auth/Auth';

/* *** STYLES *** */
import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;

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
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route exact path="/signin" render={() => (currentUser ? (<Redirect to="/" />) : <Auth />)} />
				</Switch>
			</div>
		);
	}
}

App.propTypes = {
	currentUser: PropTypes.shape(),
};

App.defaultProps = {
	currentUser: null,
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
