import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import LoginScreen from "./pages/LoginScreen"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboardjs"
import ForgotPass from "./pages/ForgotPassword"
import {Auth} from "./firebase/firebase.config"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MD3LightTheme as DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import themeConfig from './themeConfig';

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
            component={ForgotPass}
            options={{
              headerShown:false,
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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );

}
export default App
const styles = StyleSheet.create({});
