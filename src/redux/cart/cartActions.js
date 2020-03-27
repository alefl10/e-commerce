import { TOGGLE_CART_HIDDEN, HIDE_CART, ADD_ITEM } from './cartTypes';

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
