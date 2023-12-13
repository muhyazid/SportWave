// router.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../layouts/Home/HomeScreen';
import MatchScreen from '../../layouts/Match/MatchScreen';
import ProfileScreen from '../../layouts/Profile/ProfileScreen';
import SearchScreen from '../../layouts/Search/SearchScreen';
import EditForm from '../../layouts/EditForm/EditForm';
import {colors} from '../theme';
import {Home3, Activity, User} from 'iconsax-react-native';
import {FormContent} from '../../components';
import BlogDetail from '../../layouts/BlogDetail/BlogDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => {
  return (
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
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainTabNavigator">
      <Stack.Screen
        name="MainTabNavigator"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Form"
        component={FormContent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BlogDetail"
        component={BlogDetail}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <Stack.Screen
        name="EditForm"
        component={EditForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
