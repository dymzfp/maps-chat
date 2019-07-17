import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// screen
import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp'; 

const Auth = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      header: null
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null
    },
  }
});

const LogScreen = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {headerMode: 'none'} );

const AppNavigator = createStackNavigator({
  LogScreen: {
    screen: LogScreen,
    navigationOptions: {
      header: null
    }
  },
  Auth: {
    screen: Auth
  },
});

export default createAppContainer(AppNavigator);
