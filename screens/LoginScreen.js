import React, {Component} from 'react';
import { TextInput, Image, StyleSheet, View, AsyncStorage } from 'react-native'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {BoldText} from "../components/BoldText";
import {RegularText} from "../components/RegularText";
import {ItalicText} from "../components/ItalicText";
import Button from "../components/Button";
import Ratings from "../components/Rating";

class LoginScreen extends Component {

    state = {
        email: '',
        password: ''
    };

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Main');
    };

    render() {
        return (
            <KeyboardAwareScrollView
                resetScrollToCoords={{x: 0, y: 0}}
                contentContainerStyle={styles.container}
                extraHeight={200}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.logo}>
                    <Image source={require('../assets/images/truck.png')}/>
                    <BoldText style={styles.title}>Handly</BoldText>
                </View>
                <View style={styles.quote}>
                    <ItalicText>I don't trust these stairs because they're always up to something.</ItalicText>
                    <View style={{padding: 3, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <ItalicText>- Jesus Escalona</ItalicText>
                        <Ratings value={4.5}/>
                    </View>
                </View>
                <View style={styles.loginContainer}>
                    <BoldText>We will help you relocate, just log in.</BoldText>
                    <TextInput onChangeText={(e) => this.setState({email: e})} style={styles.input} placeholder='Email Address' textContentType='emailAddress'/>
                    <TextInput onChangeText={(e) => this.setState({password: e})} style={styles.input} placeholder='Password' secureTextEntry />
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        label='Log In'
                        onPress={this._signInAsync}
                    />
                    <RegularText style={{alignSelf: 'center'}}>or</RegularText>
                    <RegularText
                        style={styles.link}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        Create an Account
                    </RegularText>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: '#5A4FF3'
    },
    link: {
        alignSelf: 'center',
        textDecorationLine: 'underline',
        color: '#5A4FF3'
    },
    quote: {
        flex: 0.1,
        justifyContent: 'space-evenly',
        alignSelf: 'stretch'
    },
    logo: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginContainer: {
        paddingHorizontal: 10,
        flex: 0.5,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignSelf: 'stretch'
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#93A3B1',
        textAlign: 'left',
        fontSize: 18
    },
    button: {
        backgroundColor: '#5A4FF3'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    }
});


export default LoginScreen;