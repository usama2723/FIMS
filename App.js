import { StyleSheet, TouchableOpacity, Text, View, } from 'react-native';
import 'react-native-gesture-handler';
import LoginScreen from "./pages/LoginScreen"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import TabNavigation from './components/TabNavigation';
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebase.config"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import themeConfig from './themeConfig';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const theme = {
  ...DefaultTheme,
  ...themeConfig
}

const Stack = createNativeStackNavigator();
const App = ({ Navigation }) => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login"
            component={LoginScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#0047f8',
              },
              headerTitleStyle: {
                color: 'white',
              }
            }}
          />
          <Stack.Screen name="SignUp"
            component={SignUp}
            options={{
              headerTintColor: 'white',
              headerShown: true,
              title: 'SignUp',
              // headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#0047f8',
              },
              headerTitleStyle: {
                color: 'white',
              }

            }}
          />

          <Stack.Screen name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerShown: false,
              title: 'ForgotPassword',
              // headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#0047f8',
              },
              headerTitleStyle: {
                color: 'white',
              }
            }}
          />
          <Stack.Screen name="TabNavigation"
            component={TabNavigation}
            options={(props) => {
              return {
                headerRight: () => (
                  <TouchableOpacity onPress={() => {
                    signOut(auth).then(() => {
                      props.navigation.replace('Login')
                      alert('user logged out')
                    }).catch((error) => {
                      // An error happened.
                    });
                  }}>
                    <MaterialCommunityIcons name="logout" color={'white'} size={26} />
                  </TouchableOpacity>
                ),

                headerShown: true,
                title: 'tabNavigation',
                // headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#0047f8',
                },
                headerTitleStyle: {
                  color: 'white',
                }
              }

            }}
          />
        </Stack.Navigator>


      </NavigationContainer>

    </PaperProvider>


  );

}
export default App
const styles = StyleSheet.create({});
