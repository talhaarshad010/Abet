import {SPLASH_BOOL} from './actionTypes';

export const splashBool = payload => {
  return {
    payload: payload,
    type: SPLASH_BOOL,
  };
};
