import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './cartTypes';

export const toggleCartHiddenAction = () => ({
	type: TOGGLE_CART_HIDDEN,
});

export const addItemAction = item => ({
	type: ADD_ITEM,
	payload: item,
});
