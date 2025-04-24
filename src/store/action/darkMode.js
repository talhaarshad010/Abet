import {DARK_MODE, SPLASH_BOOL} from './actionTypes';

export const darkModaA = payload => {
  return {
    payload: payload,
    type: DARK_MODE,
  };
};
