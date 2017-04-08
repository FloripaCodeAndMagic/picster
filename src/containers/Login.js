import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Button, View, Text } from 'react-native';

import * as actionCreators from '../actions/loginActionCreators'
import * as colors from '../colors'

class Login extends Component {
  render() {
    const { startLogin } = this.props.actions
    const { loading } = this.props

    return (
      <View>
        <Button title='Login With Facebook'
          color={colors.blue}
          onPress={startLogin}
        />
      </View>
    )
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
