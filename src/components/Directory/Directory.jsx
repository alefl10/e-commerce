/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideCartAction } from '../../redux/cart/cartActions';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectDirectorySections } from '../../redux/directory/directorySelector';

/* *** COMPONENTS *** */
import MenuItem from '../MenuItem/MenuItem';

/* *** STYLES *** */
import './Directory.scss';

const Directory = ({ hidden, hideCart, sections }) => (
	<div className="directory-menu" onClick={hidden ? null : () => hideCart()}>
		{sections.map((
			{
				id,
				title,
				imageUrl,
				size,
				linkUrl,
			},
		) => (
			<MenuItem
				key={id}
				title={title}
				imageUrl={imageUrl}
				size={size}
				linkUrl={linkUrl}
			/>
		))}
	</div>
);

Directory.propTypes = {
	hideCart: PropTypes.func.isRequired,
	hidden: PropTypes.bool.isRequired,
	sections: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden,
	sections: selectDirectorySections,
});

const mapDispatchToProps = dispatch => ({
	hideCart: () => dispatch(hideCartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
