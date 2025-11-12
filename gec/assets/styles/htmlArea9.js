import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
        width,
        height: 130,
        overflow: "hidden",
        paddingRight: 10,
    },
    webview: {
        width,
        height,
        backgroundColor: "transparent",
        paddingRight: 10,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})