import {
	takeLatest, put, all, call,
} from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signInSuccessAction, signInFailureAction } from './userActions';
import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from './userTypes';

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccessAction({
			id: userSnapshot.id,
			...userSnapshot.data(),
		}));
	} catch (error) {
		yield put(signInFailureAction(error));
	}
}

// GOOGLE AUTH
export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailureAction(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}


// EMAIL AUTH
export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailureAction(error));
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
	]);
}
