import {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
} from '../actions';
const initialState = {
  users: null,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_INFO_REQUEST_SUCCESS: {
      const {users} = action.payload;
      return {users};
    }
    default:
      return state;
  }
};
