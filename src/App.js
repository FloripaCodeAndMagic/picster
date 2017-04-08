import React from 'react'
import firebase from 'firebase'
import { Text, View } from 'react-native'

import * as colors from './colors'

import Login from './containers/Login'

const config = {
  apiKey: "AIzaSyBqCmZMQt76m87ftuxXEv-tGyftCCOVWXw",
  authDomain: "picster-18f83.firebaseapp.com",
  databaseURL: "https://picster-18f83.firebaseio.com",
  projectId: "picster-18f83",
  storageBucket: "picster-18f83.appspot.com",
  messagingSenderId: "218259833332"
};

firebase.initializeApp(config);


const App = () => {
  const { viewStyle, textStyle } = style

  return (
    <View>
      <View style={viewStyle}>
        <Text style={textStyle}>Picster</Text>
      </View>

      <Login />
    </View>
  )
}

const style = {
  viewStyle: {
    padding: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow
  },
  textStyle: {
    fontSize: 24
  }
}


export default App
