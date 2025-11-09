import { View, ScrollView, StatusBar, StyleSheet } from "react-native"

import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"

import HeaderMobile from "../components/Header/index"

import Footer from "../components/Footer/index"

import HtmlArea9 from "../components/Homepage/HtmlArea9"

import HtmlArea3 from "../components/Homepage/HtmlArea9"

import { SafeAreaView } from "react-native-safe-area-context"

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

      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,

            { paddingBottom: insets.bottom },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.placeholder}>
            {Array.from({ length: 1 }).map((_, i) => (
              <View key={i} style={styles.block}>
                <View style={styles.blockInner} />
              </View>
            ))}
          </View>

          <HtmlArea9 />

          <HtmlArea3 />

          <View style={styles.placeholder}>
            {Array.from({ length: 3 }).map((_, i) => (
              <View key={i} style={styles.block}>
                <View style={styles.blockInner} />
              </View>
            ))}
          </View>

          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
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