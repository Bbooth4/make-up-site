const defaultState = {
  missingFields: [],
  contact: {
    topic: null,
    email: null,
    content: null,
    lastName: null,
    firstName: null
  }
};

const photos = (state=defaultState, action) => {
  switch (action.type) {
    case 'CONTACT':
      return { ...state, contact: { ...state.contact, ...action.data } };
    case 'SAVE_CONTACT':
      return { ...state, contact: action.data };
    case 'CONTACT_MISSING_FIELDS':
      return { ...state, missingFields: action.data };
    case 'CLEAR':
      return {};
    default:
      return state;
  }
};

export default photos;
