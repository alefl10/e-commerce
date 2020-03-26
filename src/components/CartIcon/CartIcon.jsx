/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHiddenAction } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

/* *** COMPONENTS *** */
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

/* *** STYLES *** */
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<div className="item-count">{itemCount}</div>
	</div>
);

CartIcon.propTypes = {
	toggleCartHidden: PropTypes.func.isRequired,
	itemCount: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
