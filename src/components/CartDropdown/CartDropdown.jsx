import React from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';

/* *** COMPONENTS *** */
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

/* *** STYLES *** */
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{
				cartItems.map(item => <CartItem key={item.id} item={item} />)
			}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

CartDropdown.propTypes = {
	cartItems: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = state => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
