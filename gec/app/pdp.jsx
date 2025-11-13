"use client"

import { View, Text, Dimensions, ScrollView, Image, TouchableOpacity, Modal, TextInput } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Header from "../components/Header/index"
import Footer from "../components/Footer/index"
import { useState, useRef } from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import { styles } from "../assets/styles/pdp"
import Accordion from "../components/Basic/Accordian"

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const IMAGE_WIDTH = SCREEN_WIDTH - 32
const dotSize = 8
const activeDotSize = 12

export default function PDP() {
  const insets = useSafeAreaInsets()
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollViewRef = useRef(null)
  const [quantity, setQuantity] = useState("1")
  const [modalVisible, setModalVisible] = useState(false)

  const options = Array.from({ length: 9 }, (_, i) => (i + 1).toString()).concat("10+")

  const images = [
    
  ]

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x
    const index = Math.round(scrollPosition / IMAGE_WIDTH)
    setActiveIndex(index)
  }

  return (
    <View style={styles.safeArea}>
      <Header />

      <ScrollView contentContainerStyle={[{ paddingBottom: insets.bottom }]} showsVerticalScrollIndicator={false}>
        {/* TempOffer */}
        <View style={styles.tempoffer}>
          <Text style={styles.offerMain}>SAVE UP TO 15% ON SELECT FLOOR CARE MACHINES - ENDS NOV 30 | SHOP NOW</Text>
          <Text style={styles.offerFootnote}> {">>"} *See Terms & Conditions</Text>
        </View>

        {/* BreadCrumb */}
        <View style={styles.breadcrumbOuter}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.scrollContent}
            style={styles.scrollView}
            indicatorStyle="white"
          >
            <Text style={styles.breadcrumbText}>
              Home {"  >  "} Storage & Shelving {"  >  "} Cabinets {"  >  "} Safety Cabinets {"  >  "} Flammable
              Materials Cabinets {"  >  "} Flammable Safety Cabinets
            </Text>
          </ScrollView>
        </View>

        {/* ProdTitle */}
        <View style={styles.prodTitleContainer}>
          <Text style={styles.prodTitleText}>
            Global Industrial™ Flammable Cabinet, Manual Close Double Door, 45 Gallon, 43"Wx18"Dx65"H
          </Text>
          <Text style={styles.prodItemKey}>Model #: WB298541</Text>
        </View>

        {/* ImageGal */}
        <View style={styles.imageGalleryContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            style={styles.imageScrollView}
          >
            {images.map((uri, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={{ uri }} style={styles.productImage} resizeMode="contain" />
              </View>
            ))}
          </ScrollView>

          <View style={styles.dotsContainer}>
            {(() => {
              const total = images.length
              const max = 6
              const half = Math.floor(max / 2)

              let start = Math.max(0, activeIndex - half)
              const end = Math.min(total - 1, start + max - 1)

              if (end - start + 1 < max) {
                start = Math.max(0, end - max + 1)
              }

              const dots = []
              for (let i = start; i <= end; i++) {
                const isActive = i === activeIndex
                dots.push(
                  <View
                    key={i}
                    style={[
                      styles.dotBase,
                      {
                        width: isActive ? activeDotSize : dotSize,
                        height: isActive ? activeDotSize : dotSize,
                        borderRadius: isActive ? activeDotSize / 2 : dotSize / 2,
                      },
                      isActive ? styles.activeDot : styles.inactiveDot,
                    ]}
                  />,
                )
              }

              const placeholders = max - dots.length
              for (let p = 0; p < placeholders; p++) {
                dots.push(<View key={`ph-${p}`} style={styles.dotSpacer} />)
              }

              return dots
            })()}
          </View>
        </View>

        {/* Exclusive Brands & Icons Row */}
        <View style={styles.brandsRow}>
          <View style={styles.badgesContainer}>
            <View style={[styles.badge, styles.exclusiveBadge]}>
              <Text style={styles.badgeText}>EXCLUSIVE BRANDS</Text>
            </View>
            <View style={[styles.badge, styles.bestsellerBadge]}>
              <Text style={styles.badgeText}>BESTSELLER</Text>
            </View>
          </View>

          <View style={styles.iconsContainer}>
            <Ionicons name="heart-outline" size={18} color="#004e7d" />
            <Ionicons name="share-social-outline" size={18} color="#004e7d" style={styles.iconSpacing} />
            <Ionicons name="document-text-outline" size={18} color="#004e7d" style={styles.iconSpacing} />
          </View>
        </View>

        {/* Stars and Questions */}
        <View style={styles.ratingRow}>
          {[...Array(5)].map((_, i) => (
            <Ionicons key={i} name="star-sharp" size={15} color="#ffa500" />
          ))}
          <Text style={styles.reviewCount}>(47)</Text>
          <Text style={styles.qaText}>| Questions & Answers (3)</Text>
        </View>

        {/* Promotional price */}
        <View style={styles.promoPriceRow}>
          <Text style={styles.promoLabel}>PROMOTIONAL PRICE</Text>
          <Ionicons name="information-circle-outline" size={18} color="#004e7d" style={styles.infoIcon} />
          <Text style={styles.currentPrice}>$908.10</Text>
          <Text style={styles.originalPrice}>was $1009.00</Text>
          <Text style={styles.savingPrice}>Save $100.90 (10%)</Text>
        </View>

        {/* Add To Cart */}
        <View style={styles.container}>
          <TouchableOpacity style={styles.pickerButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.pickerText}>{quantity}</Text>
            <Ionicons name="chevron-down" size={16} color="#000000ff" style={styles.chevron} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPressOut={() => setModalVisible(false)}>
              <View style={styles.modalContent}>
                {options.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={[styles.modalItem, item === quantity && styles.modalItemSelected]}
                    onPress={() => {
                      setQuantity(item)
                      setModalVisible(false)
                    }}
                  >
                    <Text style={[styles.modalItemText, item === quantity && styles.modalItemTextSelected]}>
                      {" "}
                      {item}{" "}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableOpacity>
          </Modal>
        </View>

        {/* Ships Same Day */}
        <View style={styles.promoPriceRow}>
          <Text style={styles.shipsSameDay}>Ships Same Day</Text>
        </View>

        {/* ZipCode Save */}
        <View>
          <Text style={styles.enterZip}>Enter a Zip</Text>
          <View style={styles.outerContainer}>
            <View style={styles.zipcodeContainer}>
              <TextInput
                style={styles.zipcodeInput}
                placeholder="Enter zipcode"
                placeholderTextColor="#999"
                editable={false}
                pointerEvents="none"
              />
              <TouchableOpacity style={styles.saveButton} activeOpacity={0.8}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Return Policy */}
        <View style={styles.ReturnContainer}>
          <View style={styles.borderLine} />
          <View style={styles.ReturnContent}>
            <Text style={styles.ReturnText}>Easy online or call-in returns.</Text>
            <Text style={styles.ReturnLinkText}>Read return policy</Text>
          </View>
          <View style={styles.borderLine} />
        </View>

        {/* Accordian */}
        <View style={styles.accordionSection}>
          <Accordion title="Product Description" variant="pdp">
            <Text style={styles.accordionContentText}>
              <Text style={styles.check}>✓</Text> 1-1/2" insulating air space & dual 2" air vents{"\n"}
              <Text style={styles.check}>✓</Text> 350 lb. capacity shelves adjust easily on 2-1/2" centers{"\n"}
              <Text style={styles.check}>✓</Text> Flush door handle prevents employees from catching or banging into
              cabinet{"\n\n"}
              <Text style={styles.paragraph}>
                Provide additional fire protection in your workspace with the Global Industrial™ Flammable Cabinet with
                Manual Close Doors. Featuring an all-welded construction for long-lasting durability, this 18-gauge
                steel cabinet with 14-gauge steel doors has three shelves, two of which are adjustable, to safely store
                up to 45-gallons of flammable liquids. The double-walled design allows for 1-1/2" of insulating air
                space, while the dual 2" air vents connect to exhaust systems to maintain safe temperatures. This unit
                is equipped with full-length piano hinges and a spill-proof sill for convenient spill management.
              </Text>
              {"\n\n"}
              Meets NFPA Flammable Liquid Code #30 & the OSHA Standard 1910.106 for storage of class I, II, and III
              liquids{"\n"}
              FM-approved{"\n"}
              Includes a highly visible warning label, a built-in grounding connector, & leveling feet{"\n"}
              Doors will only latch when they are manually closed; they will not close automatically{"\n"}
              Some states and municipalities may require self-closing doors on flammable safety cabinets; please review
              your local ordinances prior to purchasing
            </Text>
          </Accordion>
          <Accordion title="Specifications" variant="pdp">
            <Text style={styles.accordionContentText}>• Capacity: 45 Gallon{"\n"}• Dimensions: 43"W x 18"D x 65"H</Text>
          </Accordion>
          <Accordion title="User Documents" variant="pdp">
            <Text style={styles.accordionContentText}>Download: Spec Sheet | Safety Data</Text>
          </Accordion>
          <Accordion title="Frequently Purchased Togather" variant="pdp">
            <Text>This is the expandable content for Section 2. It can be any JSX!</Text>
          </Accordion>
          <Accordion title="Related Products and Accessories" variant="pdp">
            <Text>This is the expandable content for Section 2. It can be any JSX!</Text>
          </Accordion>
          <Accordion title="Customer Also Viewed" variant="pdp">
            <Text>This is the expandable content for Section 2. It can be any JSX!</Text>
          </Accordion>
          <Accordion title="Compare with Similar Items" variant="pdp">
            <Text>This is the expandable content for Section 2. It can be any JSX!</Text>
          </Accordion>
          <Accordion title="Customer Also Purchased" variant="pdp">
            <Text>This is the expandable content for Section 2. It can be any JSX!</Text>
          </Accordion>
          <Accordion title="Reviews" variant="pdp">
            <Text>This is the expandable content for Section 2. It can be any JSX!</Text>
          </Accordion>
          <Accordion title="Questions & Answer" variant="pdp">
            <Text>This is the expandable content for Section 2. It can be any JSX!</Text>
          </Accordion>
        </View>

        {/* Content test */}
        <View style={styles.contentPlaceholder}>
          <Text style={styles.placeholderText}>Product details coming soon…</Text>
        </View>

        <Footer />
      </ScrollView>
    </View>
  )
}
