import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import LoginContainer from './login/LoginContainer';

export default class Main extends Component {

    render() {
        return (
            <View style={styles.main}>
                <LoginContainer/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        backgroundColor: '#fffae0',
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    loginButton: {
        flex: 0.5
    }

});

*/
