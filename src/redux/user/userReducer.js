import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './userTypes';

const INITIAL_STATE = {
	currentUser: null,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
	case SIGN_IN_SUCCESS:
		return {
			...state,
			currentUser: payload,
			error: null,
		};
	case SIGN_IN_FAILURE:
		return {
			...state,
			error: payload.error,
		};
	default:
		return state;
	}
};

export default userReducer;
