/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideCartAction } from '../../redux/cart/cartActions';
import { selectCartItems, selectCartTotal, selectCartHidden } from '../../redux/cart/cartSelectors';

/* *** COMPONENTS *** */
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';

import './CheckoutPage.scss';

const CheckoutPage = ({
	cartItems,
	total,
	hideCart,
	hidden,
}) => (
	<div className="checkout-page" onClick={hidden ? null : () => hideCart()}>
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
		}
		<div className="total">{`TOTAL: $${total}`}</div>
		<div className="text-warning">
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div>
		<StripeButton price={total} />
	</div>
);

CheckoutPage.propTypes = {
	cartItems: PropTypes.arrayOf(PropTypes.shape).isRequired,
	total: PropTypes.number.isRequired,
	hideCart: PropTypes.func.isRequired,
	hidden: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
	hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
	hideCart: () => dispatch(hideCartAction()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
