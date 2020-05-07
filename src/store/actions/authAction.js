import consts from '../../helpers/consts';
import { AsyncStorage } from 'react-native';

export const authAction = ({username, password}) => (dispatch) => {
  dispatch({
    type: consts.RequestedCredentials
  });
  fetch('https://umschool.online/api/auth/obtain/', {
    method: 'POST', headers: {
      'Content-Type': 'application/json',
    }, body: JSON.stringify({'username': username, 'password': password})
  }).then(data => { return data.json();})
    .then(async (data) => {
      if (data.token) {
        await AsyncStorage.setItem('token', data.token);
        console.log(data.token);
      } else {throw 'Wrong Credentials';}
      dispatch({
        type: consts.ReceivedCredentials,
        payload: data
      });
    }).catch(err => {
    dispatch({
      type: consts.RejectedCredentials,
      payload: err
    });
  });
};

export const refreshTokenAction = ({token}) => (dispatch) => {
  dispatch({
    type: consts.RequestedTokenRefresh
  });
  fetch('https://umschool.online/api/auth/refresh/', {
    method: 'POST', headers: {
      'Content-Type': 'application/json',
    }, body: JSON.stringify({'token': token})
  }).then(data => { return data.json();})
    .then(async (data) => {
      if (data.token) {
        await AsyncStorage.setItem('token', data.token);
        console.log(data.token);
      } else {throw 'Token was not verified';}
        console.log(data);
      dispatch({
        type: consts.ReceivedTokenRefresh,
        payload: data
      });
    }).catch(err => {
    dispatch({
      type: consts.RejectedTokenRefresh,
      payload: err
    });
  });
};

export const verifyTokenAction = ({token}) => (dispatch) => {
  dispatch({
    type: consts.RequestedTokenRefresh
  });
  fetch('https://umschool.online/api/auth/verify/', {
    method: 'POST', headers: {
      'Content-Type': 'application/json',
    }, body: JSON.stringify({'token':token})
  }).then(data => { return data.json();})
    .then(async (data) => {
      console.log(data);
      dispatch({
        type: consts.ReceivedTokenRefresh,
        payload: data
      });
    }).catch(err => {
    dispatch({
      type: consts.RejectedTokenRefresh,
      payload: err
    });
  });
};
