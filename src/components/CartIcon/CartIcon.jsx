/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { toggleCartHiddenAction } from '../../redux/cart/cartActions';

/* *** COMPONENTS *** */
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

/* *** STYLES *** */
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<div className="item-count">0</div>
	</div>
);

CartIcon.propTypes = {
	toggleCartHidden: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});


export default connect(null, mapDispatchToProps)(CartIcon);
