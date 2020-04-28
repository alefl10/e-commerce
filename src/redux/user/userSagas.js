import {
	takeLatest, put, all, call,
} from 'redux-saga/effects';
import {
	auth, googleProvider, createUserProfileDocument, getCurrentUser,
} from '../../firebase/firebase.utils';
import {
	signInSuccessAction,
	signInFailureAction,
	signOutFailureAction,
	signOutSuccessAction,
	signUpFailureAction,
	signUpSuccessAction,
} from './userActions';
import {
	GOOGLE_SIGN_IN_START,
	EMAIL_SIGN_IN_START,
	CHECK_USER_SESSION,
	SIGN_OUT_START,
	SIGN_UP_START,
	SIGN_UP_SUCCESS,
} from './userTypes';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccessAction({
			id: userSnapshot.id,
			...userSnapshot.data(),
		}));
	} catch (error) {
		yield put(signInFailureAction(error));
	}
}

// SIGN UP
export function* signUp({ payload: { email, password, displayName } }) {
	try {
		// Create user in firebase
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(signUpSuccessAction({
			user,
			additionalData: { displayName },
		}));
	} catch (error) {
		yield put(signUpFailureAction(error));
	}
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpSuccess() {
	yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart() {
	yield takeLatest(SIGN_UP_START, signUp);
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

// USER SESSION
export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailureAction(error));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccessAction());
	} catch (error) {
		yield put(signOutFailureAction(error));
	}
}

export function* onCheckUserSession() {
	yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
	yield takeLatest(SIGN_OUT_START, signOut);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
	]);
}
