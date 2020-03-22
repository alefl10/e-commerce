import React from 'react';

/* *** STYLES *** */
import './CustomButton.scss';

const CustomButton = ({ children, ...otherProps }) => (
	<button className="custom-button" {...otherProps} >
		{children}
	</button>
);

export default CustomButton;
