import { SET_CURRENT_USER } from './userTypes';

export const setCurrentUserAction = user => ({
	type: SET_CURRENT_USER,
	payload: user,
});
