import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from '../screens/MainScreen/MainScreen'
import ChatScreen from '../screens/ChatScreen/ChatScreen'
import SigninScreen from '../screens/SigninScreen/SigninScreen'
import SignupScreen from '../screens/SignupScreen/SignupScreen'


export type RootStackParams = {
  SigninScreen: undefined,
  SignupScreen: undefined,
  HomeScreen: undefined,
  ChatScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>()

const PrincipalNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name='SigninScreen' component={SigninScreen}/>
        <Stack.Screen name='SignupScreen' component={SignupScreen}/>
        <Stack.Screen name='HomeScreen' component={MainScreen}/>
        <Stack.Screen name='ChatScreen' component={ChatScreen}/>
    </Stack.Navigator>
  )
}

export default PrincipalNavigation