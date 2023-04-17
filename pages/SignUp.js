import { TouchableOpacity, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button, TextInput, Avatar, Text, Snackbar } from 'react-native-paper';
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';


const SignUp = (props) => {
    const { navigation } = props;
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [SecureTextEntry, setsecureTextEntry] = useState(true);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [errors, setErrors] = useState()
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);



    const validatePassword = () => {
        let isValid = true
        if (password.length < 6) {
            setErrors({ password: 'Password must have at least 6 characters' })
            isValid = false;
        }
        else if (confirmPassword !== password) {
            setErrors({ confirmPassword: 'Password dont match' })
            isValid = false;
        }
        return isValid;

    }


    const handleSignUpClick = () => {

        setLoading(true)
        setErrors(null)
        const isValid = validatePassword()

        if (!isValid) {
            setLoading(false)
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigation.replace('Login')
                alert('User Signup successfully')
                const user = userCredential.user;

            })
            .catch((error) => {
                alert(error.code)
                if (error.code === 'auth/invalid-email') {
                    setErrors({
                        email: 'Please enter a valid email'
                    })
                }
                else if (error.code === 'auth/email-already-in-use') {
                    setErrors({
                        email: 'Email already in use'
                    })
                }
                else if (error.code === 'auth/weak-password') {
                    setErrors({
                        password: 'The password must be at least 6 characters long'
                    })
                }


            }).finally(() => {
                setLoading(false)
            })

    }



    return (
        <ScrollView>
            <View>
                <View style={{

                }}>
                    <Text style={{
                        marginTop: '12%',
                        fontSize: 35,
                        color: 'black',
                        justifyContent: 'center',
                        alignSelf: 'center',

                    }}>
                        Create an FIMS Account
                    </Text>

                </View>

                <View>
                    <TextInput style={{
                        marginTop: '25%',
                        marginLeft: 30,
                        marginRight: 30,

                    }}
                        error={errors?.email}
                        onChangeText={(text) =>
                            setEmail(text)}
                        label="Email"

                    />

                    <TextInput
                        error={errors?.password}
                        style={{
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,

                        }}
                        onChangeText={(text) =>
                            setPassword(text)}
                        label="Password"
                        secureTextEntry={secureTextEntry}
                        right={
                            <TextInput.Icon
                                icon="eye"
                                onPress={() => {
                                    setSecureTextEntry(!secureTextEntry);
                                    return false;
                                }}
                            />
                        }
                    />
                    <TextInput
                        error={errors?.confirmPassword}
                        style={{
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,

                        }}
                        onChangeText={(text) => setConfirmPassword(text)}
                        label="Confirm Password"
                        secureTextEntry={SecureTextEntry}
                        right={
                            <TextInput.Icon
                                icon="eye"
                                onPress={() => {
                                    setsecureTextEntry(!SecureTextEntry);
                                    return false;
                                }}
                            />
                        }
                    />
                </View>

                {errors && (
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <View style={{ display: 'flex', marginTop: 5, paddingHorizontal: 10, borderRadius: 5, justifyContent: 'center', backgroundColor: '#cc0000', paddingVertical: 15, width: '80%' }}>
                            {errors?.email && <Text style={{ color: 'white' }}>{errors?.email}</Text>}
                            {errors?.password && <Text style={{ color: 'white' }}>{errors?.password}</Text>}
                            {errors?.confirmPassword && <Text style={{ color: 'white' }}>{errors?.confirmPassword}</Text>}
                        </View>
                    </View>
                )}

                <View style={{
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    justifyContent: 'space-evenly',
                    marginTop: '15%',
                }}>
                    <Button style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        width: 115,
                        borderRadius: 5,

                    }} mode="contained" onPress={() => handleSignUpClick()} disabled={loading}>

                        SIGN UP
                    </Button>
                    <Text style={{
                        fontSize: 20,
                        justifyContent: 'center',
                        alignSelf: 'center',

                    }} >or </Text>
                    <Button style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        height: 40,
                        width: 115,
                        borderRadius: 5,

                    }} mode="contained" onPress={() => navigation.navigate('Login')}>
                        CANCEL
                    </Button>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 55,
                }} >
                    <Text style={{

                        fontSize: 20,
                    }}>
                        Already Signed up?
                    </Text>
                    <Text style={{
                        color: '#87C1FF',

                        fontSize: 20,
                        marginLeft: 6
                    }} mode="contained" onPress={() => navigation.navigate('Login')}>Log in</Text>
                </View>
                <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Undo',
                        onPress: () => {
                            // Do something
                        },
                    }}>
                    Hey there! I'm a Snackbar.
                </Snackbar>
            </View>

        </ScrollView>

    )
}

export default SignUp