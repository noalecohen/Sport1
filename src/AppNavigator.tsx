import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeIcon from './assets/icons/HomeIcon';
import MoreIcon from './assets/icons/MoreIcon';
import VodIcon from './assets/icons/VodIcon';
import Colors from './constants/Colors';
import HomeScreen from './features/Home/HomeScreen';
import MoreScreen from './features/More/MoreScreen';
import VodScreen from './features/Vod/VodScreen';

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: Colors.activeLabel,
          tabBarInactiveTintColor: Colors.inactiveLabel,
          tabBarActiveBackgroundColor: Colors.primary,
          tabBarInactiveBackgroundColor: Colors.primary,
          headerShown: false,
        }}>
        <Tab.Screen
          name="MORE"
          component={MoreScreen}
          options={{
            tabBarLabel: 'עוד',
            tabBarLabelStyle: {
              paddingRight: 7,
            },
            tabBarIcon: ({focused}) => {
              return (
                <MoreIcon
                  color={focused ? Colors.activeIcon : Colors.inactiveIcon}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="VOD"
          component={VodScreen}
          options={{
            tabBarLabel: 'VOD',
            tabBarIcon: ({focused}) => {
              return (
                <VodIcon
                  color={focused ? Colors.activeIcon : Colors.inactiveIcon}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'ראשי',
            tabBarIcon: ({focused}) => {
              return (
                <HomeIcon
                  color={focused ? Colors.activeIcon : Colors.inactiveIcon}
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
