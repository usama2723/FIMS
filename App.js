import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Login from "./pages/Login"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

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
            component={Login}
            options={{
              headerShown: true,
              title: 'Login',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );

}
export default App
const styles = StyleSheet.create({});
