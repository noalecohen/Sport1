/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import VodScreen from './screens/VodScreen';
import MoreScreen from './screens/MoreScreen';
import Header from './components/Header';
import HomeIcon from '../assets/icons/HomeIcon';
import MoreIcon from '../assets/icons/MoreIcon';
import VodIcon from '../assets/icons/VodIcon';
import Colors from './constants/Colors';

const App = () => {
  <StatusBar hidden />;

  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.screen}>
      <StatusBar hidden />
      <Header />
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
});

export default App;
