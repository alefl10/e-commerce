import {
	all, call, takeLatest, put,
} from 'redux-saga/effects';
import { clearCartAction } from './cartActions';
import { SIGN_OUT_SUCCESS } from '../user/userTypes';

export function* clearCartOnSignOut() {
	yield put(clearCartAction());
}

export function* onSignOutSuccess() {
	yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
	yield all([
		call(onSignOutSuccess),
	]);
}
