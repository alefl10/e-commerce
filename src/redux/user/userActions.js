import {
	SET_CURRENT_USER,
	GOOGLE_SIGN_IN_START,
	GOOGLE_SIGN_IN_SUCCESS,
	GOOGLE_SIGN_IN_FAILURE,
	EMAIL_SIGN_IN_START,
	EMAIL_SIGN_IN_SUCCESS,
	EMAIL_SIGN_IN_FAILURE,
} from './userTypes';

export const setCurrentUserAction = user => ({
	type: SET_CURRENT_USER,
	payload: user,
});

export const googleSignInStartAction = () => ({
	type: GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccessAction = user => ({
	type: GOOGLE_SIGN_IN_SUCCESS,
	payload: user,
});

export const googleSignInFailureAction = error => ({
	type: GOOGLE_SIGN_IN_FAILURE,
	payload: error,
});

export const emailSignInStartAction = emailpAndPassword => ({
	type: EMAIL_SIGN_IN_START,
	payload: emailpAndPassword,
});

export const emailSignInSuccessAction = user => ({
	type: EMAIL_SIGN_IN_SUCCESS,
	payload: user,
});

export const emailSignInFailureAction = error => ({
	type: EMAIL_SIGN_IN_FAILURE,
	payload: error,
});
