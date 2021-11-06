import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './config/Navigation';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};
