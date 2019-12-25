import axios from 'axios';

export const getPhotos = type =>
  dispatch => {
    axios.get(`http://localhost:9001/photos?type=${type}`)
    .then(res => res.data
      ? dispatch({ type: 'PHOTOS', data: { type, data: res.data } })
      : dispatch({ type: 'PHOTO_ERROR', data: 'PHOTO_ERROR' })
    )
    .catch(err => dispatch({ type: 'PHOTO_ERROR', data: err }));
  };
