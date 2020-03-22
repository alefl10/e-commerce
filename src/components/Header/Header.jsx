import React from 'react';
import { Link } from 'react-router-dom';

/* *** COMPONENTS *** */
import { ReactComponent as Logo } from '../../assets/crown.svg';

/* *** STYLES *** */
import './Header.scss';

const Header = () => (
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
		</div>
	</div>
);

export default Header;