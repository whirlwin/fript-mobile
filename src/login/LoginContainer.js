import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Button } from 'react-native-elements';

export default class LoginContainer extends Component {

    render() {
        return (
            <View style={styles.background}>
                <LoginButton
                    readPermissions={[ " public_profile" ]}
                    onLoginFinished={ (error, result) => {
                        if (error) {
                            alert("Kunne ikke logge inn - prøv igjen senere");
                        } else {
                            // TODO: Store user permission
                            alert("Login was successful with permissions: ")
                        }
                    }}
                    onLogoutFinished={() => alert("User logged out2")}
                    />
            </View>
        );
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


