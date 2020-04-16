/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

/* *** COMPONENTS *** */
import { selectIsCollectionFetching } from '../../redux/shop/shopSelectors';
import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
	// We call it isLoading because that is the props WithSpinner is expecting
	isLoading: selectIsCollectionFetching,
});

// The line below is equivalent to
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
