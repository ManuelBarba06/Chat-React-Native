import { Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

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
            
            <View
                style={stylesChat.toolsContainer}
            >
                <TouchableOpacity>
                    <Icon
                        name="ear"
                        size={30}
                        color={"#3B7EA5"}
                    />
                </TouchableOpacity>
                
                <TextInput
                    style={stylesChat.inputMessage}
                />
                
                <TouchableOpacity
                    style={stylesChat.buttonSend}
                >
                    <Icon
                        name="send"
                        size={20}
                        color={"white"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default ChatScreen