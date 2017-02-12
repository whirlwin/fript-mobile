import React, { Component } from 'react'
import { Alert, View, StyleSheet, Image, Text } from 'react-native'
import App from './App'
import LoginContainer from './login/LoginContainer';

export default class AppRootContainer extends Component {

    render () {
        return (
            true ?
                <LoginContainer/> :
                <App/>
        );
    }
}
