/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideCartAction } from '../../redux/cart/cartActions';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

/* *** COMPONENTS *** */
import CollectionItem from '../CollectionItem/CollectionItem';

/* *** STYLES *** */
import './CollectionPreview.scss';

const CollectionPreview = ({
	title,
	items,
	hideCart,
	hidden,
}) => (
	<div className="collection-preview" onClick={hidden ? null : () => hideCart()}>
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				// Display 4 items
				.filter((item, index) => index < 4)
				.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
);

CollectionPreview.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape().isRequired,
	).isRequired,
	hideCart: PropTypes.func.isRequired,
	hidden: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
	hideCart: () => dispatch(hideCartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPreview);
