import * as firebaseClient from 'firebase';

// TODO
const config = {};

firebaseClient.initializeApp(config);

const firebaseDb = firebaseClient.database();
const firebaseAuth = firebaseClient.auth();
const firebaseAuthProviders = firebaseClient.auth;

export { firebaseAuthProviders, firebaseAuth, firebaseDb, firebaseClient as default };
