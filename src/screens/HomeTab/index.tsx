import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Home';
import { HomeSwiped } from '..';
const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                height: 0
            }
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="HomeSwiped" component={HomeSwiped} />
        </Tab.Navigator>
    );
}
export default HomeTabs;
