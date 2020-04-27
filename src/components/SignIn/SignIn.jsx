import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* *** REDUX *** */
import { connect } from 'react-redux';
import { googleSignInStartAction, emailSignInStartAction } from '../../redux/user/userActions';

/* *** COMPONENTS *** */
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

/* *** STYLES *** */
import './SignIn.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		const { emailSignInStart } = this.props;
		emailSignInStart(email, password);
	}

	render() {
		const { email, password } = this.state;
		const { googleSignInStart } = this.props;
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={email}
						label="email"
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						label="password"
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton
							type="button"
							onClick={googleSignInStart}
							isGoogleSignIn
						>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

SignIn.propTypes = {
	googleSignInStart: PropTypes.func.isRequired,
	emailSignInStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStartAction()),
	emailSignInStart: (email, password) => dispatch(emailSignInStartAction({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
