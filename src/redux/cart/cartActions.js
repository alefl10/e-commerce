import {
	TOGGLE_CART_HIDDEN,
	HIDE_CART,
	ADD_ITEM,
	REMOVE_ITEM,
} from './cartTypes';

export const toggleCartHiddenAction = () => ({
	type: TOGGLE_CART_HIDDEN,
});

export const hideCartAction = () => ({
	type: HIDE_CART,
});

export const addItemAction = item => ({
	type: ADD_ITEM,
	payload: item,
});

export const removeItemAction = cartItem => ({
	type: REMOVE_ITEM,
	payload: cartItem,
});
