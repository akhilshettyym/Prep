import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    safeArea: { flex: 1 },
    scrollContent: {
        flexGrow: 1,
    },
    placeholder: { paddingVertical: 15, paddingHorizontal: 10 },
    block: {
        height: 120,
        marginBottom: 15,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
    },
    blockInner: {
        flex: 1,
        margin: 10,
        backgroundColor: "#ddd",
        borderRadius: 6,
    },
})