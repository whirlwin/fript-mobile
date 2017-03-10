import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class LoginContainer extends Component {

    render() {
        return (
            <View style={styles.background}>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={(error, result) => {
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
                    onLogoutFinished={() => alert("logout.")}/>
            </View>
        );
    }

    handleLoginResult() {

    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "powderblue",
        alignItems: "center",
        justifyContent: "center"
    }
});


