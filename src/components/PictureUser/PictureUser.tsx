import { DimensionValue, Image, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"

import { styles } from "./pictureUserTheme"

interface PictureUserProps {
  width: DimensionValue,
  height: DimensionValue,
}

const PictureUser = ({width, height}:PictureUserProps) => {
  return (
    <View
      style={{...styles.pictureContainer, height: height, width: width}}
    >
        <LinearGradient 
          colors={["#82AC47","#aee069","#FFF"]}
          start={{x: 0, y:1}}
          end={{ x: 0, y: 0 }}
          style={styles.LinearGradient}
        >
          <Image
            style={styles.picture}
            source={{uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"}}
          />
        </LinearGradient>
    </View>
  )
}

export default PictureUser