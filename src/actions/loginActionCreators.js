import { START_LOGIN } from './login'

import firebase from '../firebase'

export const startLogin = () => dispatch =>  {
  dispatch({
    type: START_LOGIN
  })

  return firebase.login()
    .then(user => {
      console.log(user)

      return user
    })
    .catch(err => {
      console.error(err)

      throw err
    })
}
