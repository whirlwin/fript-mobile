/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import Main from './src/Main';

export default class fript_mobile extends Component {

  render() {
    return (
      <View>
        <Main/>
      </View>
    );
  }
}

AppRegistry.registerComponent('fript_mobile', () => fript_mobile);
