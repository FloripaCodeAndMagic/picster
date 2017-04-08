import React from 'react';
import firebase from 'firebase';
import { Button, View } from 'react-native';

import * as colors from '../colors'

const Login = () => {

  return (
    <View>
      <Button title='Login With Facebook'
        color={colors.blue}
      />
    </View>
  )
}

const style = {
}

export default Login
