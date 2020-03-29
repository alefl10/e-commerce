/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';

/* *** COMPONENTS *** */
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	const stripePrice = price * 100;
	const publicKey = 'pk_test_vLMXC9XPbJUj6GNerwXulGTV00QCEGoja2';

	const onToken = token => {
		console.log(token);
		// eslint-disable-next-line no-undef
		alert('Payment Succesful!');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={stripePrice}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publicKey}
		/>
	);
};

StripeButton.propTypes = {
	price: PropTypes.number.isRequired,
};

export default StripeButton;
