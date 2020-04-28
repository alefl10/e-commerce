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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	// No user stored in the Firebase Authentication table
	if (!userAuth) return null;

	// Firebase always returns a referenceDoc object whether the user exists or not
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	// Get get actual data for the retrieved doc
	const snapShot = await userRef.get();

	// If the snapshot does NOT exists ==> we store the user info (Sign Up = create new user document)
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error('ERROR creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);


// One time process to load shop collections into Firebase database
export const addCollectionAndDocuments = async (collectionKey, docsToAdd) => {
	// Create a collection reference
	const collectionRef = firestore.collection(collectionKey);
	// Batch allows to send all the set requests at once
	// either all of them succeed, or all of them fail
	const batch = firestore.batch();

	// Iterate through each doc, create a new refDoc and set it with batch
	docsToAdd.forEach(doc => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, doc);
	});

	// Execute the batch request
	await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	// Convert array to object where the keys are the titles of the passed objects
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => new Promise((resolve, reject) => {
	const unsubscribe = auth.onAuthStateChanged(userAuth => {
		unsubscribe();
		resolve(userAuth);
	}, reject);
});

// Give access to the GoogleAuthProvider class from the auth provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
