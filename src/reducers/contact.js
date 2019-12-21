const defaultState = {
  contact: {
    topic: '',
    email: '',
    lastName: '',
    firstName: ''
  },
  loaded: false
};

const photos = (state=defaultState, action) => {
  switch (action.type) {
    case 'CONTACT':
      return { ...state, contact: { ...state.contact, ...action.data } };
    case 'SAVE_CONTACT':
      return { ...state, contact: action.data };
    case 'CONTACT_ERROR':
      return {...state, error: action.data};
    case 'CLEAR':
      return {};
    default:
      return state;
  }
};

export default photos;
