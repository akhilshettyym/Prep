import { View, ScrollView, StatusBar } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import HeaderMobile from "../components/Header/index"
import Footer from "../components/Footer/index"
import HtmlArea3 from "../components/Homepage/HtmlArea3"
import HtmlArea6 from "../components/Homepage/HtmlArea6"
import HtmlArea7 from "../components/Homepage/HtmlArea7"
import HtmlArea9 from "../components/Homepage/HtmlArea9"
import HomeBanner from "../components/Homepage/HomeBanner"
import { styles } from "../assets/styles/index"

export default function Index() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  )
}

function AppContent() {
  const insets = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#004e7d" />

      <HeaderMobile />

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom }]}
        showsVerticalScrollIndicator={false}>
        <HomeBanner />
        <HtmlArea9 />
        <HtmlArea6 />
        <HtmlArea7 />
        <HtmlArea3 />

        {/* <View style={styles.placeholder}>
          {Array.from({ length: 3 }).map((_, i) => (
            <View key={i} style={styles.block}>
              <View style={styles.blockInner} />
            </View>
          ))}
        </View> */}

        <Footer />
      </ScrollView>
    </View>
  )
}