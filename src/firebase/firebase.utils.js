import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyC4AC1aYnpAU84wCPs_7oa0VqtF8R2PpY4',
	authDomain: 'ecommerce-db493.firebaseapp.com',
	databaseURL: 'https://ecommerce-db493.firebaseio.com',
	projectId: 'ecommerce-db493',
	storageBucket: 'ecommerce-db493.appspot.com',
	messagingSenderId: '256918074473',
	appId: '1:256918074473:web:12c2507ca2d8bbee58def8',
	measurementId: 'G-CTVRJFWRXW',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Give access to the GoogleAuthProvider class from the auth provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
