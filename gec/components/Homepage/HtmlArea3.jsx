import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Dimensions, Text, Platform } from "react-native";
import axios from "axios";
import WebView from "react-native-webview";

let WebWebView = null;
if (Platform.OS === "web") {
    WebWebView = require("react-native-web-webview").default;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Index() {
    const [htmlContent, setHtmlContent] = useState("");
    const [contentHeight, setContentHeight] = useState(0);
    const [loading, setLoading] = useState(true);
    const WebViewComponent = Platform.OS === "web" ? WebWebView : WebView;

    useEffect(() => {
        async function fetchPageData() {
            try {
                const end = process.env.BLOOM_REACH_URL;
                const { data } = await axios.get(end);
                const components = Object.values(data?.page ?? {});
                const htmlArea = components.find((c) => c.name === "HTML Area3");
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

    const onMessage = (event) => {
        const height = Number(event.nativeEvent.data);
        if (height > 0) setContentHeight(height);
    };

    const injectedMeasureJS = `
    (function() {
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.offsetHeight
      );
      window.ReactNativeWebView?.postMessage?.(height);
    })();
    true;
  `;

    const fixedHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=${SCREEN_WIDTH}, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
    * { box-sizing: border-box; }
    html, body { margin:0; padding:0; overflow:hidden; }
    body > * { width:100%; }
  </style>
</head>
<body>
  ${htmlContent}
  <script>${injectedMeasureJS}</script>
</body>
</html>
`;

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator style={{ width: SCREEN_WIDTH - 32, height: 500 }} size="large" />
            </View>
        );
    }

    if (!htmlContent) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>No HTML content found</Text>
            </View>
        );
    }

    return (
        <View style={{ alignItems: "center", paddingHorizontal: 16, paddingVertical: 26 }}>
            <WebViewComponent
                source={{ html: fixedHtml }}
                style={{ width: SCREEN_WIDTH - 32, height: contentHeight || 500 }}
                originWhitelist={["*"]}
                scrollEnabled={false}
                bounces={false}
                overScrollMode="never"
                javaScriptEnabled
                domStorageEnabled
                scalesPageToFit={false}
                onMessage={onMessage}
                injectedJavaScript={injectedMeasureJS}
            />
        </View>
    );
}