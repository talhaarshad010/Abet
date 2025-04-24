import {
  LOGIN_USER_FAILER,
  LOGIN_USER_REQ,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_UPDATE,
} from './actionTypes';

export const request = payload => {
  return {
    payload: payload,
    type: LOGIN_USER_REQ,
  };
};

export const loginSuccessReq = payload => {
  return {
    payload: payload,
    type: LOGIN_USER_SUCCESS,
  };
};

export const loginSuccessUpdate = payload => {
  return {
    payload: payload,
    type: LOGIN_USER_UPDATE,
  };
};

export const failer = payload => {
  return {
    payload: payload,
    type: LOGIN_USER_FAILER,
  };
};
