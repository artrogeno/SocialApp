import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

import './shared/services/firebase';
import NavigationOptions from './shared/components/NavigationOptions';
import LoadingScreen from './screens/Loading';
import LoginScreen from './screens/Auth/Login';
import RegisterScreen from './screens/Auth/Register';
import HomeScreen from './screens/Home';

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: NavigationOptions,
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: NavigationOptions,
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: NavigationOptions,
  },
});

export default createAppContainer(
  createAnimatedSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
    },
  ),
);
