const defaultState = {
  photos: [],
  error: null,
  loaded: false
};

const photos = (state=defaultState, action) => {
  switch (action.type) {
    case 'PHOTOS':
      return { ...state, photos: action.data };
    case 'PHOTO_ERROR':
      return {...state, error: action.data};
    case 'LOADED':
      return { ...state, loaded: action.data };
    case 'CLEAR':
      return {};
    default:
      return state;
  }
};

export default photos;
