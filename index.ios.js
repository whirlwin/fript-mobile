import React, { Component } from 'react';
import Main from './main';
import {
    AppRegistry
} from 'react-native';
import AppRootContainer from './src/AppRootContainer';


export default class FriptApp extends Component {

  render() {
    return (
        <AppRootContainer/>
        //<Main/>
    );
  }
}

AppRegistry.registerComponent('fript_mobile', () => FriptApp);
