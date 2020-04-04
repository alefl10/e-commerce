/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { updateCollectionsAction } from '../../redux/shop/shopActions';

/* *** COMPONENTS *** */
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

/* *** FIREBASE *** */
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

/* *** STYLES *** */
import './ShopPage.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	// unsubscribeFromSnapshot = null;

	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');
		// Promise-style connection to firebase
		collectionRef.get()
			.then(snapshot => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				updateCollections(collectionsMap);
				this.setState({ isLoading: false });
			});
	}

	render() {
		const { isLoading } = this.state;
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />} />
				<Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
			</div>
		);
	}
}

ShopPage.propTypes = {
	match: PropTypes.shape().isRequired,
	updateCollections: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollectionsAction(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
