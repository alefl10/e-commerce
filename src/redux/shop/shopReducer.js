import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './shopTypes';

const INITIAL_STATE = {
	collections: undefined,
	isFetching: false,
	errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
	case FETCH_COLLECTIONS_START:
		console.log('hello');
		return {
			...state,
			isFetching: true,
		};
	case FETCH_COLLECTIONS_SUCCESS:
		console.log('successssssss');
		return {
			...state,
			collections: payload,
			isFetching: false,
		};
	case FETCH_COLLECTIONS_FAILURE:
		return {
			...state,
			isFetching: false,
			errorMessage: payload,
		};
	default:
		return state;
	}
};

export default shopReducer;
