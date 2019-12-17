import axios from 'axios';

export const test = () =>
  dispatch => {
    axios.get(`http://localhost:9001/test`)
    .then(res => {
      res.data.result
        ? dispatch({ type: 'LOAD', data: res.data.result })
        : console.log('Failed');
    })
    .catch(err => console.log(err));
  };
