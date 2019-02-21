import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";


const AuthStack = createSwitchNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen
});

export default createAppContainer(AuthStack);