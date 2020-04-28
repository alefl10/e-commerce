import { takeLatest, call, put, all } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from './shopTypes';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccessAction, fetchCollectionsFailureAction } from './shopActions';

// Saga will run all the chained yields concurrently without blocking the execution

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		// call is the effect inside our generator function that invokes the method
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
		// put is the saga effect for dispatching actions
		yield put(fetchCollectionsSuccessAction(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailureAction(error.message));
	}
	// The above code is equivalent to the thunk-code below
	// Promise-style connection to firebase
	// collectionRef.get()
	// 	.then(snapshot => {
	// 		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
	// 		dispatch(fetchCollectionsSuccessAction(collectionsMap));
	// 	})
	// 	.catch(error => dispatch(fetchCollectionsFailureAction(error.message)));
}

export function* fetchCollectionsStart() {
	// It creates a non-blocking call in order to continuing running our application and next sagas
	// It only takes the last fired FETCH_COLLECTIONS_START action
	yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
	yield all([
		call(fetchCollectionsStart),
	]);
}
