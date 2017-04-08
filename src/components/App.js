import React from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

const config = {
  apiKey: "AIzaSyBqCmZMQt76m87ftuxXEv-tGyftCCOVWXw",
  authDomain: "picster-18f83.firebaseapp.com",
  databaseURL: "https://picster-18f83.firebaseio.com",
  projectId: "picster-18f83",
  storageBucket: "picster-18f83.appspot.com",
  messagingSenderId: "218259833332"
};

firebase.initializeApp(config);

const App = () => (
  <Text>Picster</Text>
)

export default App
