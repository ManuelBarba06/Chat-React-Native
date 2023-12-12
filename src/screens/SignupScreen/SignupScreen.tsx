import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import { styles } from '../../theme/appTheme'
import { styles as stylesSigninScreen } from '../SigninScreen/SigninScreenTheme'

import PictureUser from '../../components/PictureUser/PictureUser'
import { RootStackParams } from '../../navigation/PrincipalNavigation'

type MainScreenNavigationProps = StackNavigationProp<RootStackParams, 'SignupScreen'>

const SignupScreen = () => {
    
    const navigation = useNavigation<MainScreenNavigationProps>()
    
  return (
    <View
        style={styles.globalContainer}
    >
        <LinearGradient colors={["#3B7EA5","#4492c0","#FFF"]}
            style={stylesSigninScreen.LinearGradientContainer}
        >
            <PictureUser
                width={"40%"}
                height={"60%"}
            />
            
        </LinearGradient>
        
        <View
            style={stylesSigninScreen.formContainer}
        >
            <Text
                style={stylesSigninScreen.mainTitle}
            >Sign Up</Text>
            
            <TextInput
                    style={stylesSigninScreen.textInput}
                    placeholder='Name'
            />
            
            <TextInput
                    style={stylesSigninScreen.textInput}
                    placeholder='Last name'
            />
            
            <TextInput
                    style={stylesSigninScreen.textInput}
                    placeholder='Email'
            />
            
            <TextInput
                    style={stylesSigninScreen.textInput}
                    placeholder='Password'
                    secureTextEntry
            />
            
            <TextInput
                    style={stylesSigninScreen.textInput}
                    placeholder='Confirm password'
                    secureTextEntry
            />
            
            <TouchableOpacity
                style={stylesSigninScreen.button}
                onPress={()=> navigation.navigate('HomeScreen')}
            >
                <Text
                    style={stylesSigninScreen.buttonText}
                >
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default SignupScreen