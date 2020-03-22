/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

/* *** STYLES *** */
import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		<input
			className="form-input"
			onChange={handleChange}
			{...otherProps}
		/>
		{
			label
				? (
					<label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>
						{label}
					</label>
				)
				: null
		}
	</div>
);

FormInput.propTypes = {
	handleChange: PropTypes.func.isRequired,
	label: PropTypes.string,
};

FormInput.defaultProps = {
	label: undefined,
};

export default FormInput;
