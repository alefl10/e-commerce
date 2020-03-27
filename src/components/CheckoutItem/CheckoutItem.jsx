/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { removeItemAction } from '../../redux/cart/cartActions';
// import { createStructuredSelector } from 'reselect';
// import { selectCartHidden } from '../../redux/cart/cartSelectors';

/* *** STYLES *** */
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, removeItem }) => {
	const {
		id,
		name,
		price,
		quantity,
		imageUrl,
	} = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={`${imageUrl}`} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{`$${price}`}</span>
			<div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
		</div>
	);
};

CheckoutItem.propTypes = {
	removeItem: PropTypes.func.isRequired,
	cartItem: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		price: PropTypes.number,
		quantity: PropTypes.number,
		imageUrl: PropTypes.string,
	}),
};

CheckoutItem.defaultProps = {
	cartItem: null,
};

const mapDispatchToProps = dispatch => ({
	removeItem: itemId => dispatch(removeItemAction(itemId)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
