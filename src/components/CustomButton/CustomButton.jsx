/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

/* *** STYLES *** */
import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

CustomButton.propTypes = {
	children: PropTypes.string.isRequired,
	isGoogleSignIn: PropTypes.bool,
};

CustomButton.defaultProps = {
	isGoogleSignIn: undefined,
};

export default CustomButton;
