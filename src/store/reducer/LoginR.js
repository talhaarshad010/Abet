import {
  LOGIN_USER_FAILER,
  LOGIN_USER_REQ,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_UPDATE,
} from '../action/actionTypes';

const initialState = {
  data: [],
  isloading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQ:
      return {
        data: action.payload,
        isloading: true,
        isError: false,
      };
    case LOGIN_USER_SUCCESS:
      var concateData;
      if (!state?.data?.length) {
        concateData = [action.payload];
      } else {
        concateData = state?.data?.concat([action?.payload]);
      }

      return {
        data: concateData,
        isloading: false,
        isError: false,
      };

    case LOGIN_USER_UPDATE:
      const findIndex = state?.data?.findIndex(
        i => i?.email === action?.payload?.email,
      );
      const updateData = [...state?.data];
      updateData[findIndex] = action.payload;

      // return console.log('is index find ?', findIndex);

      return {
        data: updateData,
        isloading: false,
        isError: false,
      };
    case LOGIN_USER_FAILER:
      return {
        data: action.payload,
        isloading: false,
        isError: true,
      };
    default:
      return state;
  }
};
