import { UPDATE_COLLECTIONS } from './shopTypes';

export const updateCollectionsAction = collectionsMap => ({
	type: UPDATE_COLLECTIONS,
	payload: collectionsMap,
});
