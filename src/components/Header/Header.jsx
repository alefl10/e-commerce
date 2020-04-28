/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signOutStartAction } from '../../redux/user/userActions';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

/* *** COMPONENTS *** */
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';

/* *** STYLES *** */
import './Header.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link to="/shop" className="option">
				SHOP
			</Link>
			<Link to="/contact" className="option">
				CONTACT
			</Link>
			{
				currentUser
					? <div className="option" onClick={signOutStart}>SIGN OUT</div>
					: <Link className="option" to="/signin">SIGN IN</Link>

			}
			<CartIcon />
		</div>
		{
			hidden ? null : <CartDropdown />
		}
	</div>
);

Header.propTypes = {
	currentUser: PropTypes.shape(),
	hidden: PropTypes.bool.isRequired,
	signOutStart: PropTypes.func.isRequired,
};

Header.defaultProps = {
	currentUser: undefined,
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
