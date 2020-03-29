import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

/* *** COMPONENTS *** */
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

/* *** STYLES *** */
import './ShopPage.scss';

const ShopPage = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
);

ShopPage.propTypes = {
	match: PropTypes.shape().isRequired,
};

export default ShopPage;
