import { TouchableOpacity, View, Image, Animated, ScrollView } from 'react-native';
import { Button, TextInput, Avatar, Text, Icon } from 'react-native-paper';
import React, { useState, useEffect } from 'react'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const ForgotPassword = (props) => {
    const { navigation } = props;

    const [email, setEmail] = useState(null);
    const resetPassword = () => {
        if (email != null) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Password reset email has been sent successfully')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });

        }
        else {
            alert('Enter a valid email')
        }
    }
    return (
        <ScrollView>
            <View>


                <View style={{

                }}>
                    <Text style={{
                        marginTop: '30%',
                        fontSize: 38,
                        color: 'black',
                        marginLeft: 20,
                    }}>
                        Reset password
                    </Text>
                    <Text style={{

                        fontSize: 22,
                        color: 'grey',
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 10,
                    }}>
                        Enter the email assosiated with your account and we'll send an email with instructions to reset your password
                    </Text>

                </View>

                <View>
                    <TextInput style={{
                        marginTop: '15%',
                        marginLeft: 20,
                        marginRight: 20,

                    }}
                    onChangeText={(text) =>
                        setEmail(text)}
                        label="Email Address"
                    />

                </View>

                <Button style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderRadius: 5,
                    height: 40,
                    width: 320,
                    marginTop:10,
                }} mode="contained" onPress={() => resetPassword()} >

                    SEND
                </Button>

            </View>

        </ScrollView>

    )
}

export default ForgotPassword