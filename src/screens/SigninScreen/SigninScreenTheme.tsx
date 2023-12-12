import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    LinearGradientContainer: {
        height: "30%",
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    formContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 20
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: "#3B7EA5"
    },
    
    textInput: {
        borderColor: "#d2d2d2",
        borderWidth: 1,
        width: "100%",
        marginTop: 10,
        borderRadius: 10,
        padding: 10,
        color: "#686868",
        fontSize: 17
    },
    
    button: {
        marginTop: 20,
        borderWidth: 3,
        borderColor: "#3B7EA5",
        width: "70%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    
    buttonText: {
        fontSize: 20,
        fontWeight: '700',
        color: "#3B7EA5"
    },
    
    singupButton: {
        marginTop: 20
    },
    
    singupButtonText: {
        fontSize: 17,
        fontWeight: '600'
    }
})