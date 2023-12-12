import { Text, View, ScrollView, TextInput } from "react-native"

import Header from "./Components/Header/Header"
import Message from "./Components/Message/Message"

import { styles } from "../../theme/appTheme"
import { styles as stylesChat } from "./ChatScreenTheme"


const ChatScreen = () => {
  return (
    <View
        style={styles.globalContainer}
    >
        <Header/>
        
        <View
            style={stylesChat.chatContainer}
        >
            <ScrollView style={stylesChat.messagesContainer}>
                <Message/>
            </ScrollView>
            <TextInput
                style={stylesChat.inputMessage}
            />
        </View>
    </View>
  )
}

export default ChatScreen