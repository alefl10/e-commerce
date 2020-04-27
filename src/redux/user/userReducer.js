import {
	SET_CURRENT_USER,
	GOOGLE_SIGN_IN_START,
	GOOGLE_SIGN_IN_SUCCESS,
	GOOGLE_SIGN_IN_FAILURE,
	EMAIL_SIGN_IN_START,
	EMAIL_SIGN_IN_SUCCESS,
	EMAIL_SIGN_IN_FAILURE,
} from './userTypes';

const INITIAL_STATE = {
	currentUser: null,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
	case GOOGLE_SIGN_IN_SUCCESS:
	case EMAIL_SIGN_IN_SUCCESS:
		return {
			...state,
			currentUser: payload,
			error: null,
		};
	case GOOGLE_SIGN_IN_FAILURE:
	case EMAIL_SIGN_IN_FAILURE:
		return {
			...state,
			error: payload.error,
		};
	default:
		return state;
	}
};

export default userReducer;
