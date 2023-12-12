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
        paddingLeft: 10,
        paddingRight: 10,
        width: "75%"
    },
    toolsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55

    },
    buttonSend: {
        marginLeft: 10,
        width: "12%",
        height: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B7EA5',
        borderRadius: 30,
    }
})