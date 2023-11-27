import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FirstScreen from '../screens/Firstscreen';
import SecondScreen from '../screens/Secondscreen';
import ThirdScreen from '../screens/ThirdScreen';
import FourthScreen from '../screens/FourthScreen';
import SplashScreen from '../screens/SpashScreen';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="INFORMATION"
        component={FirstScreen}
        options={{
          tabBarLabel: 'Information',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
          headerTitle: 'Information',
        }}
      />
      <Tab.Screen
        name="SEARCH INFORMATION"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Search info',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
          headerTitle: 'Search Information',
        }}
      />

      <Tab.Screen
        name="ADD INFORMATION"
        component={FourthScreen}
        options={{
          tabBarLabel: 'Add info',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" color={color} size={size} />
          ),
          headerTitle: 'Add Information',
        }}
      />
     
    </Tab.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator>
   <Stack.Screen
     name="SplashScreen"
     component={SplashScreen}
     options={{ headerShown: false }}/>
    <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
     <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
  </Stack.Navigator>
  );
};

export default { MyTabs, StackNavigation };
