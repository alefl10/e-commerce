import React, { Component } from 'react';

/* *** COMPONENTS *** */
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

/* *** FIREBASE *** */
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	render() {
		const { email, password } = this.state;
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
							onClick={signInWithGoogle}
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

export default SignIn;
