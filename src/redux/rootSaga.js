import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shopSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
	// All takes an array of sagas and calls any number of sagas inside of the array
	// and initialized them in different task streams
	yield all([
		call(fetchCollectionsStart),
		call(userSagas),
	]);
}
