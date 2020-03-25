/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

/* *** STYLES *** */
import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
	<button
		className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

CustomButton.propTypes = {
	children: PropTypes.string.isRequired,
	isGoogleSignIn: PropTypes.bool,
	inverted: PropTypes.bool,
};

CustomButton.defaultProps = {
	isGoogleSignIn: undefined,
	inverted: undefined,
};

export default CustomButton;
