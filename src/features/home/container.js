import axios from 'axios';

export const getPhotos = () =>
  dispatch => {
    axios.get(`http://localhost:9001/photos`)
    .then(res => {
      res.data
        ? dispatch({ type: 'PHOTOS', data: res.data })
        : dispatch({ type: 'PHOTO_ERROR', data: 'PHOTO_ERROR' });
      dispatch({ type: 'LOADED', data: true });
    })
    .catch(err => dispatch({ type: 'PHOTO_ERROR', data: err }));
  };
