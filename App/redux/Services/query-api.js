import {call, put, select} from 'redux-saga/effects';
const API_URL = 'http://10.0.2.2:8082/admin';
const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTYzNjE3ODk1NiwiZXhwIjoxNjM2NzgzNzU2fQ.gzmt80B_MXB78KEHkBVH7SW50J5B9xpqy3T_F8nT6XY';

export function* queryApi({endpoint, method, body = null}) {
  const res = yield call(makeRequest, {
    endpoint,
    method,
    headers: {Authorization: 'Bearer ' + jwt},
    body: JSON.stringify({
      ...body,
    }),
  });
  if (res.status === 401) {
    // Log the user out
    // Explain that they need to log back in
  }
  const parsedResponse = yield call(parseResponse, res);
  if (!res.ok) {
    // Handle bad response here
  }
  return parsedResponse;
}

const makeRequest = async ({endpoint, method, headers, body = null}) => {
  return fetch(API_URL + endpoint, {
    method,
    headers,
    body: body === '{}' ? undefined : body,
  });
};
const parseResponse = async response => {
  let parsedResponse;
  try {
    parsedResponse = await response.clone().json();
  } catch {
    parsedResponse = await response.text();
  }

  return parsedResponse;
};
