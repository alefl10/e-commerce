import React, { Component } from 'react';

/* *** COMPONENTS *** */
import CollectionPreview from '../../components/CollectionPreiew/CollectionPreview';

/* *** STYLES *** */
import './ShopPage.scss';

import SHOP_DATA from './shop.data';

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = { collections: SHOP_DATA };
	}

	render() {
		const { collections } = this.state;
		return (
			<div>
				{collections.map(({ id, title, items }) => (
					<CollectionPreview key={id} title={title} items={items} />
				))}
			</div>
		);
	}
}

export default ShopPage;
