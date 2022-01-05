const initialState = {
  signUpModal: false,
  signInModal: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLOSESIGNIN':
      return { ...state, signInModal: false };
    case 'CLOSESIGNUP':
      return { ...state, signUpModal: false };
    case 'OPENSIGNIN':
      return { ...state, signInModal: true, signUpModal: false };
    case 'OPENSIGNUP':
      return { ...state, signUpModal: true, signInModal: false };
    default:
      return state;
  }
}
