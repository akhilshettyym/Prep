import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Dimensions, Text, Platform } from "react-native";
import axios from "axios";
import WebView from "react-native-webview";

let WebWebView = null;
if (Platform.OS === "web") {
    WebWebView = require("react-native-web-webview").default;
}

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
    const { width } = Dimensions.get("window");
    const WebViewComponent = Platform.OS === "web" ? WebWebView : WebView;

    useEffect(() => {
        async function fetchPageData() {
            try {
                const end = process.env.BLOOM_REACH_URL;
                const { data } = await axios.get(end);
                const components = Object.values(data?.page ?? {});
                const htmlArea = components.find((c) => c.name === "HTML Area6");
                const htmlUrl = htmlArea?.models?.url;
                if (htmlUrl?.endsWith(".html")) {
                    const { data: rawHtml } = await axios.get(htmlUrl);
                    console.log("data: html", rawHtml);
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
                <ActivityIndicator style={{ width, height: 850 }} size="large" />
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
        .productCatgories {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            grid-gap: 12px !important;
            padding: 16px !important;
            max-width: 100% !important;
            margin: 0 auto !important;
        }
        .productCatgories .Box {
            width: 100% !important;
            height: 120px !important;
            flex-direction: column !important;
            padding: 12px !important;
            box-sizing: border-box !important;
            border: 1px solid #ddd !important;
            border-radius: 8px !important;
            background-color: #fff !important;
            transition: all 0.2s ease !important;
        }
        .productCatgories .Box:hover {
            background-color: #eaf5ff !important;
            border-color: #004e7d !important;
        }
        .productCatgories .Box .Icon {
            font-size: 36px !important;
            color: #004e7d !important;
            margin-bottom: 8px !important;
            display: flex !important;
            justify-content: center !important;
        }
        .productCatgories .Box .Icon i {
            width: 48px !important;
            height: 48px !important;
            background-size: contain !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
        }
        .productCatgories .Box .Text {
            font-size: 13px !important;
            font-weight: 600 !important;
            color: #212934 !important;
            text-align: center !important;
            line-height: 1.3 !important;
            word-wrap: break-word !important;
        }
        .productCatgories a,
        .productCatgories a:hover,
        .productCatgories a:focus,
        .productCatgories a:active {
            text-decoration: none !important;
            outline: none !important;
        }
        @media (max-width: 767.98px) {
            .productCatgories {
                grid-template-columns: repeat(3, 1fr) !important;
                padding: 11px !important;
            }
            .productCatgories .Box {
                height: 100px !important;
            }
            .productCatgories .Box .Text {
                font-size: 10px !important;
            }
        }
        .section_title_h2 {
            font-size: 18px !important;
            text-align: left !important;
            margin: 10px 0 8px 16px !important;
            padding: 0 !important;
        }
    </style>
  `;

    const finalHtml = inlineCssForWeb(htmlContent);
    const fullHtml = finalHtml.replace(
        /<div class="productCatgories/,
        `${customCss}<div class="productCatgories`
    );

    return (
        <View>
            <WebViewComponent
                originWhitelist={["*"]}
                source={{ html: fullHtml }}
                style={{ width, height: 850 }}
                scrollEnabled={false}
                javaScriptEnabled
                domStorageEnabled
                startInLoadingState={false}
                scalesPageToFit={false}
                bounces={false}
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
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