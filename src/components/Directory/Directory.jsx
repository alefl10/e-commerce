/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideCartAction } from '../../redux/cart/cartActions';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

/* *** COMPONENTS *** */
import MenuItem from '../MenuItem/MenuItem';

/* *** STYLES *** */
import './Directory.scss';

class Directory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: [
				{
					title: 'hats',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1,
					linkUrl: 'hats',
				},
				{
					title: 'jackets',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					id: 2,
					linkUrl: '',
				},
				{
					title: 'sneakers',
					imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
					id: 3,
					linkUrl: '',
				},
				{
					title: 'womens',
					imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
					size: 'large',
					id: 4,
					linkUrl: '',
				},
				{
					title: 'mens',
					imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
					size: 'large',
					id: 5,
					linkUrl: '',
				},
			],
		};
	}

	render() {
		const { sections } = this.state;
		const { hideCart, hidden } = this.props;

		return (
			<div className="directory-menu" onClick={hidden ? null : () => hideCart()}>
				{sections.map((
					{
						id,
						title,
						imageUrl,
						size,
						linkUrl,
					},
				) => (
					<MenuItem
						key={id}
						title={title}
						imageUrl={imageUrl}
						size={size}
						linkUrl={linkUrl}
					/>
				))}
			</div>
		);
	}
}

Directory.propTypes = {
	hideCart: PropTypes.func.isRequired,
	hidden: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
	hideCart: () => dispatch(hideCartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
