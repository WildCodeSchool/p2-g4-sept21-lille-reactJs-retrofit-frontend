const initialState = {
  signInModal: false,
  isLogged: false,
  token: '',
  firstname: '',
  lastname: '',
  mail: '',
  phone: '',
  streetNumber: 0,
  street: '',
  city: '',
  postalCode: 0,
  isAdmin: false,
  vote: 0,
  id: 0,
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLOSESIGNIN':
      return { ...state, signInModal: false };
    case 'OPENSIGNIN':
      return { ...state, signInModal: true };
    case 'LOGGEDIN':
      return { ...state, signInModal: false, isLogged: true, ...action.user };
    case 'UPVOTE':
      return { ...state, vote: state.vote + 1 };
    case 'LOGGOUT':
      return initialState;
    default:
      return state;
  }
}
