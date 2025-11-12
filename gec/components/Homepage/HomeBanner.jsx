import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../assets/styles/homeBanner';

const HomeBanner = () => {

    return (
        <View style={styles.screen}>
            <View style={styles.outerSource}>
                <Text style={styles.sourceText}>THE SOURCE FOR INDUSTRIAL EQUIPMENT AND SUPPLIES</Text>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: process.env.HOME_PAGE_BANNER }}
                            style={styles.image}
                            resizeMode="cover" />
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.saveUpToText}>SAVE UP TO</Text>
                        <Text style={styles.discountText}>XX% OFF</Text>
                        <Text style={styles.selectProductsText}>SELECT PRODUCTS</Text>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>SAVE NOW</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HomeBanner;