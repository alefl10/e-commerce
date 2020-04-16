/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { fetchCollectionStartAsyncAction } from '../../redux/shop/shopActions';

/* *** COMPONENTS *** */
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../CollectionPage/CollectionPageContainer';

/* *** STYLES *** */
import './ShopPage.scss';

class ShopPage extends Component {
	componentDidMount() {
		const { fetchCollectionStartAsync } = this.props;
		fetchCollectionStartAsync();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
			</div>
		);
	}
}

ShopPage.propTypes = {
	match: PropTypes.shape().isRequired,
	fetchCollectionStartAsync: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
	fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsyncAction()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
