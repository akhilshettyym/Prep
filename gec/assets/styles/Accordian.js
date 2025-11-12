import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    accordionContainer: {
        width: '100%',
        borderBottomWidth: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        paddingHorizontal: 18,
        paddingBottom: 18,
    },
    accordionItem: {
        paddingVertical: 6,
        fontSize: 13,
    },
})