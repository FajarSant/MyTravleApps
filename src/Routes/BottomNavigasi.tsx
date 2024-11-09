import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DeatailsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SettingsScreen from '../Screens/SettingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Animated} from 'react-native';
import {ProfileStackParamList} from './types';
import {TransitionPresets} from '@react-navigation/stack';


const MyStack = createStackNavigator<ProfileStackParamList>();

const ProfileStack: React.FC = () => {
  return (
    <MyStack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <MyStack.Screen
        name="ProfileScreen"
        options={{
          headerShown: false,
        }}
        component={ProfileScreen}
      />
      <MyStack.Screen name="Settings" component={SettingsScreen} />
    </MyStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        animation: 'shift',
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          return (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: focused ? 1.2 : 1, // Scale the icon when focused
                  },
                ],
              }}>
              <Icon name={iconName} size={size} color={color} />
            </Animated.View>
          );
        },
        
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#f7c51c',
        tabBarInactiveTintColor: '#777',
        headerShown: false,
        tabBarHideOnKeyboard: true, 
        tabBarAnimation: 'ease', 
        
        tabBarItemStyle: {
          transform: [
            {
              scale: 1,
            },
          ],
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={DetailsScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
});

export default BottomTabNavigator;
