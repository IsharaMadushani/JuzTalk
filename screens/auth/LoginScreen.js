import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity, StatusBar, Image } from 'react-native';
import * as firebase from 'firebase';
import { Appbar } from 'react-native-paper';

export default class LoginScreen extends React.Component {

    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate('HomeScreen');
            } else {
                this.props.navigation.navigate('LoginScreen');
            }
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    onCreateAccountPress = () => {
        this.props.navigation.navigate('SignupScreen')
    }


    render() {
        return (

            <View>
                {/* <StatusBar backgroundColor="green" barStyle="light-content" />      */}
                <Appbar.Header style = {{backgroundColor:"lightseagreen"}}>
                    <Appbar.Content title="Login Page" />
                </Appbar.Header>

                {/* <ActivityIndicator size="large" /> */}
                {/* <Text>Login</Text>  */}
                <View style={{ paddingTop: 30, alignItems: "center" }}>

                <View style={{marginTop: 0}}>
                    <Text style={{ fontSize: 16, color: 'lightseagreen', textAlign: "center",fontWeight:"bold" }}>K.I Madushani</Text>
                    <Text style={{ fontSize: 16, color: 'lightseagreen', textAlign: "center",fontWeight:"bold" }}>17001013</Text>
                    <Text style={{ fontSize: 32, color: 'darkcyan', textAlign: "center",fontWeight:"bold" }}>JuzTalk</Text>
                </View>

                    <View style={{ marginTop: 20 }}>
                        <Image
                            source={require("../assets/login.png")}
                            style={{ width: 200, height: 160, alignSelf: "center" }}>
                        </Image>
                    </View>
                    <View style={{ paddingTop: 30 }} />
                    <TextInput style={{ width: 250, height: 40, borderWidth: 1 }}
                        value={this.state.email}
                        onChangeText={(text) => { this.setState({ email: text }) }}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <View style={{ paddingTop: 10 }} />

                    <TextInput style={{ width: 250, height: 40, borderWidth: 1 }}
                        value={this.state.password}
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <View style={{ paddingTop: 10 }} />
                    <View style={styles.container}>
                        < TouchableOpacity
                            onPress={this.onLoginPress}
                            style={styles.buttonlog}>
                            <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        < TouchableOpacity
                            onPress={this.onCreateAccountPress}
                            style={styles.button}>
                            <Text style={{ fontSize: 15, color: 'lightseagreen', textAlign: "center" }}>Don't have an account? Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 5,
        width: 250,
        height: 40,

    },

    buttonlog: {
        backgroundColor: "darkcyan",
        padding: 5,
        borderRadius: 5,
        width: 250,
        height: 40,

    },

    container: {
        padding: 5,
    },

});