const defaultState = {
  contact: {
    topic: '',
    email: '',
    content: '',
    lastName: '',
    firstName: ''
  }
};

const photos = (state=defaultState, action) => {
  switch (action.type) {
    case 'CONTACT':
      return { ...state, contact: { ...state.contact, ...action.data } };
    case 'SAVE_CONTACT':
      return { ...state, contact: action.data };
    case 'CLEAR':
      return {};
    default:
      return state;
  }
};

export default photos;
