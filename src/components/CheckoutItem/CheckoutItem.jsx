/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { clearItemAction, addItemAction, removeItemAction } from '../../redux/cart/cartActions';

/* *** STYLES *** */
import './CheckoutItem.scss';

// eslint-disable-next-line object-curly-newline
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const decreaseQuantity = removeItem;
	const increaseQuantity = addItem;
	const {
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
			<span className="quantity">
				<div className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => increaseQuantity(cartItem)}>&#10095;</div>
			</span>
			<span className="price">{`$${price}`}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
		</div>
	);
};

CheckoutItem.propTypes = {
	clearItem: PropTypes.func.isRequired,
	removeItem: PropTypes.func.isRequired,
	addItem: PropTypes.func.isRequired,
	cartItem: PropTypes.shape({
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
	clearItem: item => dispatch(clearItemAction(item)),
	addItem: item => dispatch(addItemAction(item)),
	removeItem: item => dispatch(removeItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
