/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

/* *** COMPONENTS *** */
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';

/* *** FIREBASE *** */
import { auth } from '../../firebase/firebase.utils';

/* *** STYLES *** */
import './Header.scss';

const Header = ({ currentUser, hidden }) => (
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
					? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
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
};

Header.defaultProps = {
	currentUser: undefined,
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
