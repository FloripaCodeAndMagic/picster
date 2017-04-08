import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Button, View, TextInput } from 'react-native';

import * as actionCreators from '../actions/loginActionCreators'
import * as colors from '../colors'

class Login extends Component {
  render() {
    const { startLogin } = this.props.actions
    const { loading } = this.props
    const { viewStyle, textInputStyle } = styles

    return (
      <View style={viewStyle}>
        <View>
          <TextInput
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            placeholder='example@example.com'
            style={textInputStyle} />
        </View>
        <View>
          <TextInput
            autoCorrect={false}
            secureTextEntry={true}
            placeholder={'password'}
            style={textInputStyle} />
        </View>
        <Button title='Login'
          color={colors.blue}
          onPress={startLogin}
        />
        <Button title='Sign Up'
          color={colors.blue}
          onPress={startLogin}
        />
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  textInputStyle: {
    height: 50,
    width: 300,
    textAlign: 'center',
    borderColor: 'black',
    marginTop: 10,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2
  }
}

Login.propTypes = {
  actions: React.PropTypes.object,
  loading: React.PropTypes.bolean,
  user: React.PropTypes.object
}

const mapStateToProps = ({ login }) => login

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
