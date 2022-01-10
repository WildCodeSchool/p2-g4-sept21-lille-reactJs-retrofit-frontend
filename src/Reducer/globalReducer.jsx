const initialState = {
  signInModal: false,
  isLogged: false,
  token: '',
  firstname: '',
  lastname: '',
  mail: '',
  id: 0,
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLOSESIGNIN':
      return { ...state, signInModal: false };
    case 'OPENSIGNIN':
      return { ...state, signInModal: true, signUpModal: false };
    case 'LOGGEDIN':
      return { ...state, signInModal: false, isLogged: true, ...action.user };
    case 'LOGGOUT':
      return {
        ...state,
        signInModal: false,
        isLogged: false,
        token: '',
        firstname: '',
        lastname: '',
        mail: '',
        id: 0,
      };
    default:
      return state;
  }
}
