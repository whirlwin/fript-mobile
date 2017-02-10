import React, { Component } from 'react';
import Main from './main';
import {
    AppRegistry
} from 'react-native';


export default class FriptApp extends Component {

  render() {
    return (
        <Main/>
    );
  }
}

AppRegistry.registerComponent('fript_mobile', () => FriptApp);
