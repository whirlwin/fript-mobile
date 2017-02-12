import React, { Component } from 'react';
import Main from './main';
import AppContainer from './src/AppRootContainer';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class fript_mobile extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

AppRegistry.registerComponent('fript_mobile', () => fript_mobile);
