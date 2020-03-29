import PropTypes from 'prop-types';
import React from 'react';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

/* *** COMPONENTS *** */
import CollectionPreview from '../CollectionPreview/CollectionPreview';


/* *** STYLES *** */
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
	<div className="collections-overview">
		{
			collections.map(({ id, title, items }) => (
				<CollectionPreview key={id} title={title} items={items} />
			))
		}
	</div>
);

CollectionsOverview.propTypes = {
	collections: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
