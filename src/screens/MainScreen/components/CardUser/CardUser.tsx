import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { StackNavigationProp } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"

import PictureUser from "../../../../components/PictureUser/PictureUser"

import { styles } from "./cardUserTheme"

import { RootStackParams } from "../../../../navigation/PrincipalNavigation"

type MainScreenNavigationProps = StackNavigationProp<RootStackParams, 'HomeScreen'>

const CardUser = () => {
  
  const navigation = useNavigation<MainScreenNavigationProps>()
  
  return (
    <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate('ChatScreen')}
    >
        <PictureUser
            width={"13%"}
            height={"100%"}
        />
        <View
          style={styles.descriptionContainer}
        >
          <Text>Name</Text>
          <Text>Description</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CardUser