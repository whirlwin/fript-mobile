/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './main';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class fript_mobile extends Component {
  render() {
    return (
        <Main/>
    );
  }
}

AppRegistry.registerComponent('fript_mobile', () => fript_mobile);
