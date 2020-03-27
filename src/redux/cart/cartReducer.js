import { TOGGLE_CART_HIDDEN, HIDE_CART, ADD_ITEM } from './cartTypes';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
	case TOGGLE_CART_HIDDEN:
		return {
			...state,
			hidden: !state.hidden,
		};
	case HIDE_CART:
		return {
			...state,
			hidden: true,
		};
	case ADD_ITEM:
		return {
			...state,
			cartItems: addItemToCart(state.cartItems, payload),
		};
	default:
		return state;
	}
};

export default cartReducer;
