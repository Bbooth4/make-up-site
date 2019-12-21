const defaultState = {
  photoError: '',
  contactError: ''
};

const photos = (state=defaultState, action) => {
  switch (action.type) {
    case 'PHOTO_ERROR':
      return {...state, error: action.data};
    case 'CONTACT_ERROR':
      return {...state, error: action.data};
    case 'CLEAR':
      return {};
    default:
      return state;
  }
};

export default photos;
