import { START_LOGIN } from '../actions/login'

const initialState = {
  loading: false,
  user: null
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return { ...state, loading: true }
    default:
      return state
  }
}

export default login
