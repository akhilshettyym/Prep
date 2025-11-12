import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Dimensions, Text, Platform } from "react-native";
import axios from "axios";
import WebView from "react-native-webview";
import { styles } from "../../assets/styles/htmlArea9";

let WebWebView = null;
if (Platform.OS === "web") {
  WebWebView = require("react-native-web-webview").default;
}

const { width, height } = Dimensions.get("window");

const inlineCssForWeb = (html) => {
  if (Platform.OS !== "web") return html;

  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let result = html;
  let css = "";

  result = result.replace(styleRegex, (_, cssBlock) => {
    css += cssBlock;
    return "";
  });

  if (!css) return html;

  const headClose = result.search(/<\/head>/i);
  const bodyClose = result.search(/<\/body>/i);
  const insertPos =
    headClose !== -1 ? headClose : bodyClose !== -1 ? bodyClose : result.length;

  const styleTag = `<style>${css}</style>`;
  return result.slice(0, insertPos) + styleTag + result.slice(insertPos);
};

const injectNoScrollCSS = `
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: ${height}px;
      width: ${width}px;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;
    }
    * { box-sizing: border-box; }
    *, *::before, *::after { text-decoration: none !important; }
    a, a:hover, a:visited, a:active {
      text-decoration: none !important;
      color: inherit !important;
    }
  </style>
`;

export default function Index() {
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);

  const WebViewComponent = Platform.OS === "web" ? WebWebView : WebView;

  useEffect(() => {
    async function fetchPageData() {
      try {
        const end = process.env.BLOOM_REACH_URL;
        const { data } = await axios.get(end);
        const components = Object.values(data?.page ?? {});
        const htmlArea = components.find((c) => c.name === "HTML Area9");
        const htmlUrl = htmlArea?.models?.url;

        if (htmlUrl?.endsWith(".html")) {
          const { data: rawHtml } = await axios.get(htmlUrl);
          setHtmlContent(rawHtml);
        }
      } catch (err) {
        console.error("Error fetching HTML content:", err?.message || err);
      } finally {
        setLoading(false);
      }
    }
    fetchPageData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!htmlContent) {
    return (
      <View style={styles.center}>
        <Text>No HTML content found</Text>
      </View>
    );
  }

  const finalHtml = inlineCssForWeb(
    injectNoScrollCSS + htmlContent.replace(/<head[^>]*>/i, `$&${injectNoScrollCSS}`)
  );

  return (
    <View style={styles.container}>
      <WebViewComponent
        source={{ html: finalHtml }}
        style={styles.webview}
        originWhitelist={["*"]}
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState={false}
        scalesPageToFit={Platform.OS === "android"}
        injectedJavaScript={`
          document.body.style.overflow = 'hidden';
          window.ReactNativeWebView?.postMessage?.('loaded');
          true;
        `}
      />
    </View>
  );
}