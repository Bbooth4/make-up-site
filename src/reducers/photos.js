const defaultState = {
  photos: []
};

const photos = (state=defaultState, action) => {
  switch (action.type) {
    case 'PHOTOS':
      return { ...state, photos: action.data };
    case 'PHOTO_ERROR':
      return {...state, error: action.data};
    case 'CLEAR':
      return {};
    default:
      return state;
  }
};

export default photos;
