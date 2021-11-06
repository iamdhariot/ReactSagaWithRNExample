import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens';
const MainStack = createStackNavigator();
const MainNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen component={Home} name="Home" />
    </MainStack.Navigator>
  );
};
export default Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
