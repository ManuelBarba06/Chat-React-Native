import { Text, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"

import PictureUser from "../../../../components/PictureUser/PictureUser"

import { styles } from "./HeaderTheme"

const Header = () => {
  return (
    <LinearGradient colors={["#3B7EA5","#4492c0","#FFF"]}
        style={styles.headerContainer}
    >
        <Text style={styles.nameText}>Name</Text>
        
        <PictureUser
          width={"25%"}
          height={"90%"}
        />
    </LinearGradient>
  )
}

export default Header