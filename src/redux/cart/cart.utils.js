/* eslint-disable import/prefer-default-export */
export const addItemToCart = (cartItems, cartItemToBeAdded) => {
	const existingCartItem = cartItems.find(({ id }) => id === cartItemToBeAdded.id);

	if (existingCartItem) {
		return cartItems.map(item => (
			item.id === cartItemToBeAdded.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		));
	}

	return [...cartItems, { ...cartItemToBeAdded, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, removeID) => {
	const updatedCart = cartItems.filter(cartItem => cartItem.id !== removeID);
	return updatedCart;
};

export const removeItem = (cartItems, removeID) => {
	const existingCartItem = cartItems.find(item => item.id === removeID);

	// There is only one unit left from this item in the cart => remove it completely
	if (existingCartItem.quantity === 1) {
		return clearItemFromCart(cartItems, removeID);
	}

	// There are more than one units of this item in the cart => decrease quantity by one
	return cartItems.map(item => (
		item.id === removeID
			? { ...item, quantity: item.quantity - 1 }
			: item
	));
};
