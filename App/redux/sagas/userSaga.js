import {takeEvery, put, call} from 'redux-saga/effects';
import {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
} from '../actions';
import {queryApi} from '../Services/query-api';
//generic functions
export function* handler() {
  yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}

/**
 * json response
 * [
   {
      "id":5,
      "name":"test@user",
      "opCode":"test@user",
      "email":"test@user",
      "leaderId":5,
      "leaderEmail":"test@user",
      "createdAt":"2021-09-08T21:36:40.000Z",
      "updatedAt":"2021-09-17T16:44:26.000Z",
      "userDeviceLogs.id":1,
      "userDeviceLogs.device_name":"google",
      "userDeviceLogs.app_version":"2.0.8.2",
      "userDeviceLogs.device_info":"System Name : Android\nDevice Model : Android SDK built for x86 \nSystem Version : 10",
      "userDeviceLogs.app_logs":"",
      "userDeviceLogs.user_feedback":"",
      "userDeviceLogs.userId":5,
      "userDeviceLogs.createdAt":"2021-09-08T23:19:20.000Z",
      "userDeviceLogs.updatedAt":"2021-09-08T23:19:20.000Z",
      "userDeviceLogs.UserId":5
   },
   {...},
   {...}
  ]
 * 
 * 
 */

function* getAllUserInfo(action) {
  try {
    //api call
    const users = yield call(queryApi, {endpoint: '/', method: 'GET'});
    //  / console.log('users: ', users);
    yield put({
      type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
      payload: {users: users},
    });
  } catch (error) {
    //handle error
    console.log(error);
  }
}
