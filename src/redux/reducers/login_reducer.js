const INITIAL_STATE = {
  current: false,
  name: '',
  email: '',
  password: ''
}

export default function langReducer(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case 'SIGN_IN':
      return {
        ...state,
        current:payload?.current
      }
    case 'SIGN_UP':
      return {
        ...state, 
        email:payload?.email,
        name:payload?.name,
        password:payload?.password,
        current:payload?.current
      }
    default:
      return state
  }
}