import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shopSagas';
import { userSagas } from './user/userSagas';
import { cartSagas } from './cart/cartSagas';

export default function* rootSaga() {
	// All takes an array of sagas and calls any number of sagas inside of the array
	// and initialized them in different task streams
	yield all([
		call(shopSagas),
		call(userSagas),
		call(cartSagas),
	]);
}
