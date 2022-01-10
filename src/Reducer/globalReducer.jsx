const initialState = {
  signUpModal: false,
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
    case 'CLOSESIGNUP':
      return { ...state, signUpModal: false };
    case 'OPENSIGNIN':
      return { ...state, signInModal: true, signUpModal: false };
    case 'OPENSIGNUP':
      return { ...state, signUpModal: true, signInModal: false };
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
