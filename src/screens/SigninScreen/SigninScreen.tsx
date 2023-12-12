import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import { styles } from '../../theme/appTheme'
import { styles as stylesSigninScreen } from './SigninScreenTheme'

import PictureUser from '../../components/PictureUser/PictureUser'

import { RootStackParams } from '../../navigation/PrincipalNavigation'

type MainScreenNavigationProps = StackNavigationProp<RootStackParams, 'SigninScreen'>

const SigninScreen = () => {
    
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
            >
                Sign In
            </Text>
            
            <TextInput
                style={stylesSigninScreen.textInput}
                placeholder='example@example.com'
            />
            
            <TextInput
                style={stylesSigninScreen.textInput}
                placeholder='Password'
                secureTextEntry
            />
            
            <TouchableOpacity
                style={stylesSigninScreen.button}
                onPress={()=> navigation.navigate('HomeScreen')}
            >
                <Text
                    style={stylesSigninScreen.buttonText}
                >
                    Sign In
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={stylesSigninScreen.singupButton}
                onPress={()=> navigation.navigate('SignupScreen')}
            >
                <Text
                    style={stylesSigninScreen.singupButtonText}
                >
                    Don't have a account? Sign up
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SigninScreen