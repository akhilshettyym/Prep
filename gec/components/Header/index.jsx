import { useState } from "react"
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native"
import { useRouter } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import { styles } from "../../assets/styles/Header"

const Header = () => {
  const [cartCount] = useState(2)
  const [isLoggedIn] = useState(false)
  const [searchText, setSearchText] = useState("")
  const router = useRouter();

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
            <Ionicons name="menu-outline" size={36} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/pdp")}>
            <Image source={require("../../assets/images/image.png")} style={styles.logo} />
          </TouchableOpacity>
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

export default Header;