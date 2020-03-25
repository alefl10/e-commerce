import React from 'react';
import PropTypes from 'prop-types';

/* *** COMPONENTS *** */
import CustomButton from '../CustomButton/CustomButton';

/* *** STYLES *** */
import './CartDropdown.scss';

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items" />
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

export default CartDropdown;
