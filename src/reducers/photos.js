const defaultState = {
  photos: {
    banner: [],
    photo_list: []
  }
};

const photos = (state=defaultState, action) => {
  switch (action.type) {
    case 'PHOTOS':
      return {
        ...state,
        photos: {
          ...state.photos,
          [action.data.type]: action.data.data
        }
      };
    case 'PHOTO_ERROR':
      return {...state, error: action.data};
    case 'CLEAR':
      return {};
    default:
      return state;
  }
};

export default photos;
