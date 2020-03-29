import INITIAL_STATE from './directory.data';

const directoryReducer = (state = INITIAL_STATE, action) => {
	const { type } = action;
	switch (type) {
	default:
		return state;
	}
};

export default directoryReducer;
