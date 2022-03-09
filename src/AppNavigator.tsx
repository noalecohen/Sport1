import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeIcon from './assets/icons/HomeIcon';
import MoreIcon from './assets/icons/MoreIcon';
import VodIcon from './assets/icons/VodIcon';
import Colors from './constants/Colors';
import HomeScreen from './features/Home/HomeScreen';
import MoreScreen from './features/More/MoreScreen';
import VodScreen from './features/Vod/VodScreen';
import Strings from './constants/Strings';

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Strings.homeScreen.NAME}
        screenOptions={{
          tabBarActiveTintColor: Colors.ACTIVE_LABEL,
          tabBarInactiveTintColor: Colors.INACTIVE_LABEL,
          tabBarActiveBackgroundColor: Colors.PRIMARY,
          tabBarInactiveBackgroundColor: Colors.PRIMARY,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={Strings.moreScreen.NAME}
          component={MoreScreen}
          options={{
            tabBarLabel: Strings.moreScreen.LABEL,
            tabBarLabelStyle: {
              paddingRight: 7,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <MoreIcon
                  color={focused ? Colors.ACTIVE_ICON : Colors.INACTIVE_ICON}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name={Strings.vodScreen.NAME}
          component={VodScreen}
          options={{
            tabBarLabel: Strings.vodScreen.LABEL,
            tabBarIcon: ({ focused }) => {
              return (
                <VodIcon
                  color={focused ? Colors.ACTIVE_ICON : Colors.INACTIVE_ICON}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={Strings.homeScreen.NAME}
          component={HomeScreen}
          options={{
            tabBarLabel: Strings.homeScreen.LABEL,
            tabBarIcon: ({ focused }) => {
              return (
                <HomeIcon
                  color={focused ? Colors.ACTIVE_ICON : Colors.INACTIVE_ICON}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
