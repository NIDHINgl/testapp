/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { store } from './src/store';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { Provider as ReduxProvider } from 'react-redux';
import Gallery from './src/screens/Gallery'

const App: () => Node = () => {
 
const Stack = createStackNavigator();


  return (
    <ReduxProvider store={store}>

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen
                name="Gallery"
                component={Gallery}
                options={props => ({
                  headerShown: false,
                  ...props,
                })}
                
              />
              {/* <Stack.Screen
                name="Camera"
                component={Camera}
                
              /> */}
        </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
