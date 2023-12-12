import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    chatContainer: {
        flex:1,
        padding: 15
    },
    messagesContainer: {
        flexDirection: 'column-reverse',
    },
    inputMessage: {
        backgroundColor: "#d2d2d2",
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
})