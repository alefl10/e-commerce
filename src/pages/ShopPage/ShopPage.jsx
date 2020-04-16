/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors';
import { fetchCollectionStartAsyncAction } from '../../redux/shop/shopActions';

/* *** COMPONENTS *** */
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

/* *** STYLES *** */
import './ShopPage.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	componentDidMount() {
		const { fetchCollectionStartAsync } = this.props;
		fetchCollectionStartAsync();
	}

	render() {
		const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
		console.log(isCollectionsLoaded);
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
				<Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
			</div>
		);
	}
}

ShopPage.propTypes = {
	match: PropTypes.shape().isRequired,
	isCollectionFetching: PropTypes.bool.isRequired,
	isCollectionsLoaded: PropTypes.bool.isRequired,
	fetchCollectionStartAsync: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = dispatch => ({
	fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsyncAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
