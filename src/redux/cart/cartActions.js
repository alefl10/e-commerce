import {
	TOGGLE_CART_HIDDEN,
	HIDE_CART,
	ADD_ITEM,
	REMOVE_ITEM,
	CLEAR_ITEM_FROM_CART,
	CLEAR_CART,
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

export const removeItemAction = item => ({
	type: REMOVE_ITEM,
	payload: item,
});

export const clearItemAction = item => ({
	type: CLEAR_ITEM_FROM_CART,
	payload: item,
});

export const clearCartAction = () => ({
	type: CLEAR_CART,
});
