import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* *** COMPONENTS *** */
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

/* *** FIREBASE *** */
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
/* *** REDUX *** */
import { connect } from 'react-redux';
import { googleSignInStartAction } from '../../redux/user/userActions';


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

	// handleSubmit = async event => {
	// 	event.preventDefault();
	// 	const { email, password } = this.state;
	// 	googleSignInStartAction();

	// 	try {
	// 		await auth.signInWithEmailAndPassword(email, password);
	// 		this.setState({ email: '', password: '' });
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
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
						<CustomButton type="button">Sign In</CustomButton>
						<CustomButton
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
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStartAction()),
});

export default connect(null, mapDispatchToProps)(SignIn);
