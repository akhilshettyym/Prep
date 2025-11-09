"use client"

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { useState } from "react"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Entypo from "@expo/vector-icons/Entypo"
import Collapsible from "react-native-collapsible"
import { Picker } from "@react-native-picker/picker"

const index = () => {
  const [searchText, setSearchText] = useState("")
  const [selectedValue, setSelectedValue] = useState("English")

  const accordionData = [
    {
      title: "Company Information",
      content: ["About Us", "Careers", "News & Press", "Investor Relations", "CSR", "Distribution"],
    },
    {
      title: "Customer Support",
      content: [
        "Help Center",
        "My Account",
        "My Orders",
        "Track My Order",
        "Shipping & Returns",
        "Apply For Credit",
        "International Sales",
        "Sales tax Info",
        "W-9 Form",
        "Catalog",
        "Product Recall / Safety Info",
        "Floor Care Machine Self-Service",
      ],
    },
    {
      title: "Services",
      content: [
        "Extended Service Plan",
        "Limited Warranty Information",
        "Affiliate Program",
        "Government Sales",
        "Resellers",
        "Become A Supplier",
        "Safety Services",
        "Subject Matter Experts",
        "Teritory Sales Manger",
        "Accessibilty Options",
      ],
    },
    {
      title: "More Ways To Shop",
      content: ["Inventory Clearance", "Free Shipping", "New Products", "Knowledge Center", "Industrial How-Tos"],
    },
    { title: "Need Help? Contact us", content: ["Live Chat", "Email Us", "855-388-9348"] },
  ]

  const handleSearch = () => {
    console.log("Search query:", searchText)
  }

  const Accordion = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const renderContent = () => {
      if (Array.isArray(content)) {
        return content.map((item, index) => (
          <Text key={index} style={styles.contentText}>
            {item}
          </Text>
        ))
      }
      return <Text style={styles.contentText}>{content}</Text>
    }

    return (
      <View style={styles.accordionContainer}>
        <TouchableOpacity style={styles.header} onPress={() => setIsExpanded(!isExpanded)}>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.icon}>
            {isExpanded ? (
              <Entypo name="chevron-thin-up" size={20} color="#fff" />
            ) : (
              <Entypo name="chevron-thin-down" size={20} color="#fff" />
            )}
          </Text>
        </TouchableOpacity>

        <Collapsible collapsed={!isExpanded}>
          <View style={styles.content}>{renderContent()}</View>
        </Collapsible>
      </View>
    )
  }

  return (
    <>
      <View style={styles.container}>
        {accordionData.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
        <Text style={styles.deals}>Be the first one to know about special deals & events</Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email for newsletter"
            value={searchText}
            onChangeText={setSearchText}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <FontAwesome name="long-arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.iconRow}>
          <FontAwesome name="facebook-f" size={24} color="black" />
          <Entypo name="linkedin" size={24} color="black" />
          <FontAwesome name="youtube-play" size={24} color="black" />
          <FontAwesome name="twitter" size={24} color="black" />
          <FontAwesome name="instagram" size={24} color="black" />
        </View>
        <View style={styles.copyright}>
          <View style={styles.logo}>
            <Image
              source={require("../../assets/images/image.png")}
              style={{ width: 220, height: 100, marginBottom: 10 }}
              resizeMode="contain"
            />
          </View>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="English" value="US-English" />
            <Picker.Item label="Canada" value="Canada-English" />
          </Picker>
          <Text style={styles.bottomText}>
            Copyright © 2025 by Global Equipment Company Inc. All Rights Reserved. Shop With Confidence - 30 Day
            Satisfaction Guarantee
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  picker: {
    height: 30,
    width: 150,
    padding: 5,
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
  },
  accordionContainer: {
    backgroundColor: "#fff",
    borderBottom: 1,
    borderBottomColor: "hsla(0, 0%, 100%, 0.23)",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#004e7d",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  icon: {
    fontSize: 16,
    color: "#fff",
  },
  content: {
    padding: 15,
    backgroundColor: "#004e7d",
  },
  contentText: {
    fontSize: 14,
    color: "#fff",
    padding: 10,
    marginLeft: 5,
  },
  deals: {
    marginBottom: 15,
    marginTop: 10,
    padding: 5,
    fontSize: 15,
    textAlign: "center",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
    color: "#000",
    fontSize: 12,
    borderWidth: 1,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
  },
  button: {
    backgroundColor: "#d41e3d",
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginVertical: 20,
    justifyContent: "center",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
    marginTop: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  logo: {
    paddingVertical: 10,
  },
  copyright: {
    backgroundColor: "black",
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    backgroundColor: "black",
    color: "white",
    lineHeight: 20,
  },
})

export default index
