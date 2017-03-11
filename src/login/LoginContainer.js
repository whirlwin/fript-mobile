import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class LoginContainer extends Component {

    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={this.handleLoginResult}
                    onLogoutFinished={() => alert("logout.")}/>
            </View>
        );
    }

    handleLoginResult(error, result) {
        if (error) {
            alert("login has error: " + result.error);
        } else if (result.isCancelled) {
            alert("login is cancelled.");
        } else {
            AccessToken.getCurrentAccessToken().then(
                (data) => {
                    alert(data.accessToken.toString())
                }
            )
        }
    }
}

const styles = StyleSheet.create({
});


