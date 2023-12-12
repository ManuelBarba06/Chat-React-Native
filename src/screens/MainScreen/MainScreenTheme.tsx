import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    containerUsers: {
        padding: 10
    },
    textUsers: {
        marginBottom: 10,
        fontWeight: '800',
        fontSize: 15
    }
})