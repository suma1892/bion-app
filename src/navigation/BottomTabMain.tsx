import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Platform} from 'react-native';
import * as Screens from '../screens';
import BottomNavigator from './BottomNavigator';
const Tab = createBottomTabNavigator();

const HomeTab = ({navigation, route}) => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false}}
      tabBar={(props) => <BottomNavigator {...props} />}
      >
      <Tab.Screen name="Home" component={Screens.HomeTab} />
      <Tab.Screen name="Accounts" component={Screens.Accounts} />
      <Tab.Screen name="Favorite" component={Screens.Favorite} />
      <Tab.Screen name="Qris" component={Screens.Home} />
    </Tab.Navigator>
  );
};

export default HomeTab;
