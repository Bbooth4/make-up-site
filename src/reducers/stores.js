const defaultState = {};

const stores = (state=defaultState, action) => {
  switch (action.type) {
    case 'LOAD':
      return { ...state, ...action.data };
    case 'CLEAR':
      return {};
    default:
      return state;
  }
};

export default stores;
