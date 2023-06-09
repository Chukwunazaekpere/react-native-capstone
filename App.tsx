/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import MenuScreen from './src/components/MenuScreen';
import OnboardingScreen from "./src/screens/Onboarding";
import SplashScreen from './src/components/SplashScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import Profile from './src/screens/Profile';
const Stacks = createStackNavigator()

const App = (): JSX.Element => {
    const [appState, setAppState] = useState({
      splash: true
    })
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    useEffect(() => {
      setTimeout(() => {
        setAppState({
          ...appState,
          splash: false
        })
      }, 4000)
    }, []);
    return (
      <React.Fragment>
        {
          appState.splash ?
          <React.Fragment>
            <StatusBar backgroundColor={"#000"} />
            <SplashScreen />
            </React.Fragment>
          :
          <React.Fragment>
          <NavigationContainer>
            <Stacks.Navigator>
              <Stacks.Screen options={{
                header: () => undefined
              }} name='onboarding' component={OnboardingScreen} />
              <Stacks.Screen name='profile' component={Profile} />
            </Stacks.Navigator>
          </NavigationContainer>
          </React.Fragment>
        }
      </React.Fragment>
    );
}

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
