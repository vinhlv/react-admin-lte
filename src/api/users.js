import reduxApi, {transformers} from 'redux-api';
import customFetch from 'api/axios';
import {API_URL} from 'constants/config';

export default reduxApi({
  login: {
    url: API_URL + '/users/login',
    options:(url, params, getState) => {
      return {
        method: "post",
        headers: {
          "Accept": 'application/json',
          "Content-Type": "application/json"
        },
        data: {
          email: params.email,
          password: params.password
        }
      };
    }
  }
}).use('fetch', customFetch);