import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button, TextInput, Avatar, Text, Banner } from 'react-native-paper';
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const LoginScreen = (props) => {
    const { navigation } = props;
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState()
    const [loading, setLoading] = useState(false)

    const login = () => {
        setLoading(true)
        setErrors(null)

    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                 navigation.replace('TabNavigation')
                alert('User login successfully');
                const user = userCredential.user;
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    setErrors({
                        email: 'Please enter a valid email'
                    })
                } else if (error.code === 'auth/user-disabled') {

                } else if (error.code === 'auth/user-not-found') {

                } else if (error.code === 'auth/wrong-password') {
                    setErrors({
                        password: 'Please enter a valid password'
                    })
                } else if (error.code === 'auth/network-request-failed') {
                    // Handle network error
                } else if (error.code === 'auth/too-many-requests') {
                    // Handle too many requests error
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
                        fontSize: 30,
                        color: 'black',
                        justifyContent: 'center',
                        alignSelf: 'center',

                    }}>
                        WELCOME!
                    </Text>
                    <Image
                        source={require('../assets/logo1.png')}
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            height: 185,
                            width: 191,
                            borderRadius: 100,
                            marginTop: '5%',

                        }}
                    />
                </View>

                <View>

                    <TextInput style={{
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: '12%',
                    }}
                        error={errors?.email}
                        onChangeText={(text) =>
                            setEmail(text)
                        }
                        label="Username or Email"
                    />

                    <TextInput style={{
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                    }}
                        error={errors?.password}
                        onChangeText={(text) =>
                            setPassword(text)
                        }
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
                    <Text onPress={() => navigation.navigate('ForgotPassword')}
                        style={{
                            color: '#87C1FF',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginLeft: '52%',
                            fontSize: 17,
                            marginTop: 15,
                        }}>Forgot Password?</Text>

                </View>
                {errors && (
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <View style={{ display: 'flex', marginTop: 5, paddingHorizontal: 10, borderRadius: 5, justifyContent: 'center', backgroundColor: '#cc0000', paddingVertical: 15, width: '80%' }}>
                            {errors?.email && <Text style={{ color: 'white' }}>{errors?.email}</Text>}
                            {errors?.password && <Text style={{ color: 'white' }}>{errors?.password}</Text>}
                        </View>
                    </View>
                )}

                <View>

                    <Button style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        height: 40,
                        width: 110,
                        marginTop: 29,
                        borderRadius: 5,

                    }} mode="contained" onPress={() => login()} disabled={loading}>

                        LOG IN
                    </Button>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 55,
                }}>
                    <Text style={{
                        color: 'black',
                        
                        fontSize: 20,
                    }}>New To App?
                    </Text>
                    <Text onPress={() => navigation.navigate('SignUp')}
                        style={{
                            color: '#87C1FF',
                           
                            fontSize: 20,
                            marginLeft: 6
                        }}>SignUp</Text>
                </View>

            </View>
        </ScrollView>

    )
}

export default LoginScreen