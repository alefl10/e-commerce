/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

/* *** COMPONENTS *** */
import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
	// We call it isLoading because that is the props WithSpinner is expecting
	// And we pass a function with state because we need to invert the value of isLoading
	isLoading: state => !selectIsCollectionsLoaded(state),
});

// The line below is equivalent to
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));
const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner,
)(CollectionPage);

export default CollectionsOverviewContainer;
