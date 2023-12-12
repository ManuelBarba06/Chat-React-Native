import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    messageContainer: {
        width: "100%",
        flexDirection: "row-reverse",
        marginBottom: 20,
    },
    message: {
        width: "50%",
        maxWidth: "50%",
        backgroundColor: "#3B7EA5",
        flexDirection: "row-reverse",
        padding: 10,
        borderRadius: 10
    },
    text: {
        color: "white",
        fontSize: 13,
        fontWeight: "500"
    }
})