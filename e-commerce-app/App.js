import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GettingStarted from './screens/GettingStarted';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword'; 
import SignUp from './screens/SignUp';
import Welcome from './screens/Welcome';
import Categories from './screens/Categories';
import LCategories from './screens/LCategories';
import LProducts from './screens/LProducts';
import GeCategories from './screens/GeCategories';
import GeProducts from './screens/GeProducts';
import KCategories from './screens/KCategories';
import KProducts from './screens/KProducts';
import ECategories from './screens/ECategories';
import EProducts from './screens/EProducts';
import GrCategories from './screens/GrCategories';
import GrProducts from './screens/GrProducts';
import TCategories from './screens/TCategories';
import TProducts from './screens/TProducts';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Favorites from './screens/Favorites';
import { GlobalProvider } from './screens/GlobalContext';
import { CartProvider } from './screens/CartContext';
import { FavoritesProvider } from './screens/FavoritesContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Favorites" component={Favorites} />
  </Tab.Navigator>
);

const CustomDrawerContent = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
    props.setTheme(isDarkMode ? DefaultTheme : DarkTheme);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.toggleContainer}>
        <Text style={styles.footerText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleSwitch}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const WelcomeDrawer = ({ setTheme }) => (
  <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} setTheme={setTheme} />}>
    <Drawer.Screen name="Home" component={BottomTabs} />
    <Drawer.Screen name="Categories" component={Categories} />
    <Drawer.Screen name="Logout" component={GettingStarted} />
  </Drawer.Navigator>
);

const App = () => {
  const [theme, setTheme] = useState(DefaultTheme);

  return (
    <GlobalProvider>
      <CartProvider>
        <FavoritesProvider>
          <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName="GettingStarted">
              <Stack.Screen
                name="GettingStarted"
                component={GettingStarted}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
              />
              <Stack.Screen
               name="ForgotPassword"
               component={ForgotPassword} />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
              />
              <Stack.Screen
                name="Welcome"
                component={() => <WelcomeDrawer setTheme={setTheme} />}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LCategories"
                component={LCategories}
              />
              <Stack.Screen
                name="LProducts"
                component={LProducts}
              />
              <Stack.Screen
                name="GeCategories"
                component={GeCategories}
              />
              <Stack.Screen
                name="GeProducts"
                component={GeProducts}
              />
              <Stack.Screen
                name="KCategories"
                component={KCategories}
              />
              <Stack.Screen
                name="KProducts"
                component={KProducts}
              />
              <Stack.Screen
                name="ECategories"
                component={ECategories}
              />
              <Stack.Screen
                name="EProducts"
                component={EProducts}
              />
              <Stack.Screen
                name="GrCategories"
                component={GrCategories}
              />
              <Stack.Screen
                name="GrProducts"
                component={GrProducts}
              />
              <Stack.Screen
                name="TCategories"
                component={TCategories}
              />
              <Stack.Screen
                name="TProducts"
                component={TProducts}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoritesProvider>
      </CartProvider>
    </GlobalProvider>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  footerText: {
    fontSize: 18,
  },
});

export default App;
