import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHiddenAction } from '../../redux/cart/cartActions';

/* *** COMPONENTS *** */
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

/* *** STYLES *** */
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{
				cartItems.length > 0
					? cartItems.map(item => <CartItem key={item.id} item={item} />)
					: <span className="empty-message">Your cart is empty</span>
			}
		</div>
		<CustomButton onClick={() => {
			history.push('/checkout');
			dispatch(toggleCartHiddenAction());
		}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

CartDropdown.propTypes = {
	cartItems: PropTypes.arrayOf(PropTypes.shape).isRequired,
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.shape().isRequired,
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
