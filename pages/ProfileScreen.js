import { TouchableOpacity, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button, TextInput, Avatar, Text, Snackbar } from 'react-native-paper';
import React, { useState } from "react";

const Profile = (props) => {
    const { navigation } = props;
    return (
        <View>
        <Text style={{
                justifyContent: 'center',
                alignSelf: 'center',
                marginVertical: '50%',
                backgroundColor: 'cyan',
            }}>This is profile screen</Text>

        </View>


    )
}
export default Profile