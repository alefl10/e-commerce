import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './shopTypes';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionStartAction = () => ({
	type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccessAction = collectionsMap => ({
	type: FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionsFailureAction = errorMessage => ({
	type: FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

export const fetchCollectionStartAsyncAction = () => dispatch => {
	const collectionRef = firestore.collection('collections');
	dispatch(fetchCollectionStartAction());
	// Promise-style connection to firebase
	collectionRef.get()
		.then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(fetchCollectionsSuccessAction(collectionsMap));
		})
		.catch(error => dispatch(fetchCollectionsFailureAction(error.message)));
};
