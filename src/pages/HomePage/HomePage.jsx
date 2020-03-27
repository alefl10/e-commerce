import React from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { hideCartAction } from '../../redux/cart/cartActions';

/* *** COMPONENTS *** */
import Directory from '../../components/Directory/Directory';

/* *** STYLES *** */
import './HomePage.scss';

const HomePage = ({ hideCart }) => (
	<div className="homepage" onClick={() => hideCart()}>
		<Directory />
	</div>
);

HomePage.propTypes = {
	hideCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>({
	hideCart: () => dispatch(hideCartAction()),
});

export default connect(null, mapDispatchToProps)(HomePage);
