import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './layouts/Home/HomeScreen';
import MatchScreen from './layouts/Match/MatchScreen';
import ProfileScreen from './layouts/Profile/ProfileScreen';
import {colors} from './src/theme';
import {Home3, Activity, User} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.darkModeBlack(),
            paddingBottom: 6,
            paddingTop: 2,
            height: 54,
          },
          tabBarActiveTintColor: colors.blue(),
          tabBarInactiveTintColor: 'grey',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Home3
                  variant={focused ? 'Bold' : 'Linear'}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Match"
          component={MatchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Activity
                  variant={focused ? 'Bold' : 'Linear'}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return (
                <User
                  variant={focused ? 'Bold' : 'Linear'}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
