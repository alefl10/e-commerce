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
