import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Singup from '../screens/Singup';

const Stack = createStackNavigator();

function HomeScreen() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Singup" component={Singup}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default HomeScreen;