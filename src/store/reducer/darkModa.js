import {
  DARK_MODE,
  LOGIN_USER_FAILER,
  LOGIN_USER_REQ,
  LOGIN_USER_SUCCESS,
  SPLASH_BOOL,
} from '../action/actionTypes';

const initialState = {
  data: false,
  isloading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        data: action.payload,
        isloading: false,
        isError: false,
      };
    default:
      return state;
  }
};
