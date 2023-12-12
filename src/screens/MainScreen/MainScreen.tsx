import { ScrollView, Text, View } from "react-native"

import MainText from "./components/MainText/MainText"
import CardUser from "./components/CardUser/CardUser"

import { styles } from "../../theme/appTheme"
import { styles as stylesMainScreen } from "./MainScreenTheme"

const MainScreen = () => {
  
  return (
    <View
        style={styles.globalContainer}
    >
        <MainText/>
        
        <View
          style={stylesMainScreen.containerUsers}
        >
          <Text
            style={stylesMainScreen.textUsers}
          >
            Online
          </Text>
          <ScrollView
          >
            <CardUser/>
          </ScrollView>
          <Text
            style={stylesMainScreen.textUsers}
          >
            Offline
          </Text>
          <ScrollView
          >
            <CardUser/>
          </ScrollView>
        </View>
    </View>
  )
}

export default MainScreen