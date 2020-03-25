import React from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { addItemAction } from '../../redux/cart/cartActions';

/* *** COMPONENTS *** */
import CustomButton from '../CustomButton/CustomButton';

/* *** STYLES *** */
import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
		</div>
	);
};

CollectionItem.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		imageUrl: PropTypes.string.isRequired,
	}).isRequired,
	addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
