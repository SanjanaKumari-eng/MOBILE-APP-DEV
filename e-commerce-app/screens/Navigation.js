import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Welcome from './Welcome';  // Update with your actual file path
import ForgotPassword from './ForgotPassword';
import Categories from  './Categories';
import LCategories from './LCategories';  // Update with your actual file path
import LProducts from './LProducts';  // Update with your actual file path

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="LCategories" component={LCategories} />
        <Stack.Screen name="LProducts" component={LProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;