import { Text } from "react-native"
import LinearGradient from "react-native-linear-gradient"

import { styles } from "./mainTextTheme"
import PictureUser from "../../../../components/PictureUser/PictureUser"

const MainText = () => {
  return (
    <LinearGradient colors={["#3B7EA5","#4492c0","#FFF"]} style={styles.containerText}>
        <PictureUser
          width={"30%"}
          height={"100%"}
        />
        <Text
          style={styles.text}
        >
            Nombre Completo
        </Text>
    </LinearGradient>
  )
}

export default MainText