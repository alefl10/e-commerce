import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MenuItem.scss';

const MenuItem = ({
	title,
	imageUrl,
	size,
	linkUrl,
	history,
	match,
}) => (
	<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<div className="content"> 
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle"> SHOP NOW </span>
		</div>
	</div>
);

MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	linkUrl: PropTypes.string.isRequired,
	history: PropTypes.shape().isRequired,
	match: PropTypes.shape().isRequired,
	size: PropTypes.string,
};

MenuItem.defaultProps = {
	size: undefined,
};

export default withRouter(MenuItem);
