import { addItemToCart, clearItemFromCart, removeItem } from './cart.utils';
import {
	TOGGLE_CART_HIDDEN,
	HIDE_CART,
	ADD_ITEM,
	REMOVE_ITEM,
	CLEAR_ITEM_FROM_CART,
	CLEAR_CART,
} from './cartTypes';

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
	case REMOVE_ITEM:
		return {
			...state,
			cartItems: removeItem(state.cartItems, payload.id),
		};
	case CLEAR_ITEM_FROM_CART:
		return {
			...state,
			cartItems: clearItemFromCart(state.cartItems, payload.id),
		};
	case CLEAR_CART:
		return {
			...state,
			cartItems: [],
		};
	default:
		return state;
	}
};

export default cartReducer;
