import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class LoginContainer extends Component {

    render() {
        return (
            <View>
                <LoginButton
                    onLoginFinished={(err, res) => {
                        if (err) {
                            Alert.alert("login has error: " + err);
                        } else if (res.isCancelled) {
                            Alert.alert("login is cancelled.");
                        } else {
                            debugger;
                            AccessToken.getCurrentAccessToken().then((data) => {
                                Alert.alert(data.accessToken.toString())
                            })
                        }
                    }}
                />
            </View>
        );
    }
}
