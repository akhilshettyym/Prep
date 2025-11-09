"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

const HeaderMobile = () => {
  const [cartCount] = useState(2)
  const [isLoggedIn] = useState(false)
  const [searchText, setSearchText] = useState("")

  const handleSearch = () => {
    console.log("Search query:", searchText)
  }

  return (
    <View style={styles.container}>
      <View style={styles.supportBar}>
        <Text style={styles.supportText}>Sales: +1 (800) 123-4567</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.leftSection}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu-outline" size={28} color="#fff" />
          </TouchableOpacity>

          <Image source={require("../../assets/images/image.png")} style={styles.logo} />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name={isLoggedIn ? "person" : "person-outline"} size={22} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cartButton}>
            <Ionicons name="cart-outline" size={22} color="#fff" />
            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBarWrapper}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a keyword or part number"
            placeholderTextColor="#555"
            value={searchText}
            onChangeText={setSearchText}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Ionicons name="search" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HeaderMobile

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
  },
  supportBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
    backgroundColor: "#c4e8f6",
  },
  supportText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "700",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    backgroundColor: "#004e7d",
  },
  iconButton: {
    paddingHorizontal: 8,
  },
  logo: {
    width: 80,
    height: 30,
    resizeMode: "contain",
    marginLeft: 8,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cartButton: {
    position: "relative",
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
    paddingBottom: 8,
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
