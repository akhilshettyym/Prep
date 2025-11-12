import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
    },
    supportBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 2,
        paddingTop: Platform.OS === "ios" ? 55 : 40,
        backgroundColor: "#c4e8f6",
    },
    supportText: {
        fontSize: 16,
        color: "#333",
        fontWeight: "700",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        backgroundColor: "#004e7d",
    },
    iconButton: {
        paddingHorizontal: 8,
    },
    logo: {
        width: 135,
        height: 45,
        resizeMode: "contain",
        marginLeft: 2,
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    cartButton: {
        position: "relative",
        marginRight: 12,
    },
    cartBadge: {
        position: "absolute",
        top: -4,
        right: -8,
        backgroundColor: "#FF3B30",
        borderRadius: 8,
        paddingHorizontal: 4,
        minWidth: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    cartBadgeText: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "bold",
    },
    searchBarWrapper: {
        backgroundColor: "#004e7d",
        paddingHorizontal: 10,
        paddingBottom: 12,
        alignItems: "center",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 6,
        overflow: "hidden",
        width: "100%",
        height: 36,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 12,
        color: "#000",
        fontSize: 12,
    },
    searchButton: {
        backgroundColor: "#d41e3d",
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
    },
})