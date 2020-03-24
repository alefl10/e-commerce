import React from 'react';

/* *** COMPONENTS *** */
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

/* *** STYLES *** */
import './Auth.scss';

const Auth = () => (
	<div className="auth">
		<SignIn />
		<SignUp />
	</div>
);

export default Auth;
