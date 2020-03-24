import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* *** COMPONENTS *** */
import { ReactComponent as Logo } from '../../assets/crown.svg';

/* *** FIREBASE *** */
import { auth } from '../../firebase/firebase.utils';

/* *** STYLES *** */
import './Header.scss';

const Header = ({ currentUser }) => (
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
		</div>
	</div>
);

Header.propTypes = {
	currentUser: PropTypes.shape(),
};

Header.defaultProps = {
	currentUser: undefined,
};

export default Header;
