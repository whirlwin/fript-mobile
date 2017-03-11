import React, { Component } from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import Main from "./src/Main";

export default class fript_mobile extends Component {

    render() {
        return (
            <Main/>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    halfHeight: {
        flex: 2,
        backgroundColor: '#FF3366'
    },
    quarterHeight: {
        flex: 1,
        backgroundColor: '#000'
    }
});


AppRegistry.registerComponent('fript_mobile', () => fript_mobile);
