import { TouchableOpacity, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button, TextInput, Avatar, Text, Snackbar } from 'react-native-paper';
import React, { useState } from "react";
import { auth, fb } from '../firebase/firebase.config';

const HomeScreen = (props) => {
    const { navigation } = props;
    return (
        <View>

            <Text style={{
                justifyContent:'center',
                alignSelf:'center',
                marginVertical:'50%',
                backgroundColor:'cyan',
            }}>This is home screen</Text>
            <Button onPress={()=>{
                
                fb.push(fb.ref(fb.db, '/userProfiles'), {
                    title: 'First data object',
                    description: 'This is first data object wihch is pushed by React Native',
                    userId: auth.currentUser.uid
                })
            }}>push data</Button>
        </View>


    )


}
export default HomeScreen