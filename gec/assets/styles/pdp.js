import { StyleSheet, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const IMAGE_WIDTH = SCREEN_WIDTH - 32;

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },

    tempoffer: {
        backgroundColor: "#d41e3d",
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: "center",
    },
    offerMain: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 9,
        textAlign: "center",
    },
    offerFootnote: {
        color: "#fff",
        fontSize: 10,
        marginTop: 2,
    },

    breadcrumbOuter: {
        marginHorizontal: 16,
        marginVertical: 12,
        backgroundColor: "#fff",
        borderRadius: 2,
        overflow: "hidden",
    },
    scrollView: {
        maxHeight: 40,
    },
    scrollContent: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: "center",
    },
    breadcrumbText: {
        fontSize: 13,
        color: "#535353",
    },

    prodTitleContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    prodTitleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 4,
    },
    prodItemKey: {
        fontSize: 10,
        color: "#666",
        textAlign: "left",
    },

    // Image
    imageGalleryContainer: {
        marginHorizontal: 16,
        marginVertical: 12,
    },
    imageScrollView: {
        height: 320,
    },
    imageWrapper: {
        width: IMAGE_WIDTH,
        paddingHorizontal: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    productImage: {
        width: "100%",
        height: 300,
        backgroundColor: "#ffffffff",
        borderRadius: 8,
    },

    // Dots for image
    dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
    },
    dotBase: {
        marginHorizontal: 4,
    },
    dotSpacer: {
        width: 8,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: "#004e7d",
    },
    inactiveDot: {
        backgroundColor: "#ccc",
    },
    contentPlaceholder: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    placeholderText: {
        fontSize: 18,
        color: "#666",
    },

    // Exclusive Brands & BestSeller
    brandsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },

    badgesContainer: {
        flexDirection: "row",
        flexShrink: 1,
    },

    badge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: "center",
    },

    exclusiveBadge: {
        backgroundColor: "#004e7d",
    },

    bestsellerBadge: {
        backgroundColor: "#daa520",
    },

    badgeText: {
        color: "#fff",
        fontSize: 9,
        fontWeight: "bold",
        letterSpacing: 0.5,
    },

    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconSpacing: {
        marginLeft: 10,
    },

    // Stars
    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    reviewCount: {
        marginLeft: 6,
        fontSize: 13,
        color: "#004e7d",
        fontWeight: "600",
    },

    qaText: {
        marginLeft: 8,
        fontSize: 13,
        color: "#424c5b",
    },

    // Promotional Price
    promoPriceRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexWrap: "wrap",
    },
    promoLabel: {
        fontSize: 11,
        color: "#424c5b",
        fontWeight: "600",
        marginRight: 6,
    },
    infoIcon: {
        marginRight: 8,
    },
    currentPrice: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginRight: 8,
    },
    originalPrice: {
        fontSize: 12,
        color: "#999",
        textDecorationLine: "line-through",
    },
    savingPrice: {
        fontSize: 12,
        color: "#4e832e",
        fontWeight: "bold",
    },

    // Add to cart
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginVertical: 12,
    },
    pickerButton: {
        width: 70,
        height: 46,
        borderWidth: 1,
        borderColor: '#004e7d',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginRight: 12,
    },
    pickerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000ff',
    },
    chevron: {
        marginLeft: 4,
    },
    addToCartButton: {
        backgroundColor: '#d41e3d',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        minWidth: 270,
    },
    addToCartText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 8,
        width: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    modalItem: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems: 'center',
        borderRadius: 6,
    },
    modalItemSelected: {
        backgroundColor: '#004e7d',
    },
    modalItemText: {
        fontSize: 16,
        color: '#333',
    },
    modalItemTextSelected: {
        color: '#fff',
        fontWeight: 'bold',
    },
    shipsSameDay: {
        fontSize: 12,
        color: "#004e7d",
        fontWeight: "bold",
    },

    // Save zipcode
    outerContainer: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginVertical: 12,
    },
    zipcodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        gap: 16,
        justifyContent: 'center',
    },
    zipcodeInput: {
        width: 160,
        height: 48,
        borderWidth: 1,
        borderColor: '#9e9e9eff',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
    },
    saveButton: {
        width: 160,
        height: 48,
        backgroundColor: '#004e7d',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // Enter Zip
    enterZip: {
        fontSize: 18,
        color: "#000000ff",
        paddingHorizontal: 16,
        paddingVertical: 6,
        fontWeight: '400',
    },

    // Return Policy
    ReturnContainer: {
        width: '100%',
        backgroundColor: '#ffffffff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 8,
    },
    borderLine: {
        height: 1,
        backgroundColor: '#ddd',
        width: '100%',
    },
    ReturnContent: {
        paddingVertical: 8,
    },
    ReturnText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 4,
    },
    ReturnLinkText: {
        fontSize: 14,
        paddingHorizontal: 16,
        fontWeight: 'bold',
        color: '#004e7d',
    },

    // Accordian
    accordionSection: {
        width: '100%',
        paddingHorizontal: 16,
    },
    accordionContentText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },
    accordionContentText: {
        fontSize: 12,
        color: '#333',
        lineHeight: 22,
    },

    check: {
        color: '#797979ff',
        fontWeight: 'bold',
        marginRight: 8,
    },

    paragraph: {
        lineHeight: 22,
    },

    bullet: {
        color: '#004e7d',
        fontWeight: 'bold',
        marginRight: 8,
    },
})