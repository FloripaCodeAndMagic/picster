import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBqCmZMQt76m87ftuxXEv-tGyftCCOVWXw",
  authDomain: "picster-18f83.firebaseapp.com",
  databaseURL: "https://picster-18f83.firebaseio.com",
  projectId: "picster-18f83",
  storageBucket: "picster-18f83.appspot.com",
  messagingSenderId: "218259833332"
};

firebase.initializeApp(config);

const provider = new firebase.auth.FacebookAuthProvider();

const login = () => firebase.auth().signInWithRedirect(provider)

export default { login }
