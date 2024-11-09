// src/Navigation/AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreens';
import DetailsScreen from './Screens/DeatailsScreens';
import ProfileScreens from './Screens/ProfileScreens';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';

            // Menentukan ikon berdasarkan nama route
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            height: 60,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
            backgroundColor: '#fff', // Background tab bar
            paddingBottom: 10,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 5, // Efek bayangan pada tab bar di Android
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#f7c51c', // Warna ikon aktif
          tabBarInactiveTintColor: '#777', // Warna ikon tidak aktif
          headerShown: false, // Menonaktifkan header
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={DetailsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Style untuk tab bar
const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 10,
    backgroundColor: '#fff', // Background tab bar
  },
});

export default AppNavigator;
