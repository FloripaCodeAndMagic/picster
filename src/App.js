import React from 'react'
import { Text, View } from 'react-native'

import * as colors from './colors'

import Login from './containers/Login'

const App = () => {
  const { outerStyle, viewStyle, textStyle } = style

  return (
    <View style={outerStyle}>
      <View style={viewStyle}>
        <Text style={textStyle}>Picster</Text>
      </View>
      <Login />
    </View>
  )
}

const style = {
  outerStyle: {
    flex: 1
  },
  viewStyle: {
    padding: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
  },
  textStyle: {
    fontSize: 24
  }
}


export default App
