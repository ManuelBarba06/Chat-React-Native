import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from '../screens/MainScreen/MainScreen'
import ChatScreen from '../screens/ChatScreen/ChatScreen'


export type RootStackParams = {
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
        <Stack.Screen name='HomeScreen' component={MainScreen}/>
        <Stack.Screen name='ChatScreen' component={ChatScreen}/>
    </Stack.Navigator>
  )
}

export default PrincipalNavigation