import React, { useEffect, useState } from "react";
import { View, ActivityIndicator,  Dimensions, Text, Platform } from "react-native";
import axios from "axios";
import WebView from "react-native-webview";

let WebWebView = null;
if (Platform.OS === "web") {
  WebWebView = require("react-native-web-webview").default;
}

const { width } = Dimensions.get("window");

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
        const htmlArea = components.find((c) => c.name === "HTML Area7");
        const htmlUrl = htmlArea?.models?.url;

        if (htmlUrl?.endsWith(".html")) {
          const { data: rawHtml } = await axios.get(htmlUrl);
          console.log("DATA html raw", rawHtml);
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator style={{ width, height: 750 }} size="large" />
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

  const customCss = `
    <style>
        .ind-flex {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
            padding: 16px 20px !important;
            justify-content: center !important;
            align-content: start !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            box-sizing: border-box !important;
        }
        .ind-flex > div {
            max-width: 92% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 12px !important;
            box-sizing: border-box !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
        }
        .ind-flex > div a {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-decoration: none !important;
            width: 100% !important;
            height: 100% !important;
        }
        .ind-flex > div a img {
            width: 110px !important;
            height: 110px !important;
            object-fit: cover !important;
            border: 1px solid #004e7d !important;
            border-radius: 6px !important;
            margin-bottom: 10px !important;
        }
        .ind-flex > div a h3 {
            font-size: 12px !important;
            font-weight: 600 !important;
            color: #004e7d !important;
            margin: 0 !important;
            text-align: center !important;
        }
        .title-flex h2 {
            text-align: left !important;
            font-weight: 500 !important;
            margin: 10px 0 8px 20px !important;
            font-size: 20px !important;
            line-height: 24px !important;
            padding: 0 !important;
        }
        @media (max-width: 1366.98px),
               (max-width: 768.98px),
               (max-width: 429.98px) {
            .ind-flex {
                grid-template-columns: 1fr 1fr !important;
                gap: 12px !important;
                padding: 12px 16px !important;
            }
            .ind-flex > div a img {
                width: 100px !important;
                height: 100px !important;
            }
            .ind-flex > div a h3 {
                font-size: 12px !important;
            }
            .title-flex h2 {
                margin-left: 16px !important;
            }
        }
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            height: 100% !important;
            width: 100% !important;
        }
    </style>
  `;

  const finalHtml = inlineCssForWeb(htmlContent);
  const fullHtml = finalHtml.replace(
    /<div class="ind-flex"/,
    `${customCss}<div class="ind-flex"`
  );

  return (
    <View>
      <WebViewComponent
        originWhitelist={["*"]}
        source={{ html: fullHtml }}
        style={{ width, height: 750 }}
        scrollEnabled={false}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState={false}
        scalesPageToFit={false}
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        mixedContentMode="compatibility"
        injectedJavaScript={`
          document.body.style.overflow = 'hidden';
          window.ReactNativeWebView?.postMessage?.('loaded');
          true;
        `}
      />
    </View>
  );
}