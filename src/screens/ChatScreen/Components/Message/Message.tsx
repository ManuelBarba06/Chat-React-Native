import { Text, View } from "react-native"

import { styles } from "./MessageTheme"

const Message = () => {
  return (
    <View
        style={styles.messageContainer}
    >
        <View
            style={styles.message}
        >
            <Text
                 style={styles.text}
            >
                Hello
            </Text>
        </View>
    </View>
  )
}

export default Message