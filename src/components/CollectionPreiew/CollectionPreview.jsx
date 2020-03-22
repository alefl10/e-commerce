import React from 'react';
import PropTypes from 'prop-types';

/* *** COMPONENTS *** */
import CollectionItem from '../CollectionItem/CollectionItem';

/* *** STYLES *** */
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				// Display 4 items
				.filter((item, index) => index < 4)
				.map(({
					id,
					name,
					price,
					imageUrl,
				}) => (
					<CollectionItem
						key={id}
						name={name}
						price={price}
						imageUrl={imageUrl}
					/>
				))}
		</div>
	</div>
);

CollectionPreview.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape().isRequired,
	).isRequired,
};

export default CollectionPreview;
