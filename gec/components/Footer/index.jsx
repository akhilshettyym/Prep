import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { Picker } from '@react-native-picker/picker';
import Accordion from '../Basic/Accordian';
import { styles } from '../../assets/styles/Footer'

const flags = {
    US: require('../../assets/images/us.png'),
    CA: require('../../assets/images/ca.png'),
};

const Footer = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedValue, setSelectedValue] = useState('US-English');

    const accordionData = [
        {
            title: 'Company Information',
            content: [
                'About Us',
                'Careers',
                'News & Press',
                'Investor Relations',
                'CSR',
                'Distribution',
            ],
        },
        {
            title: 'Customer Support',
            content: [
                'Help Center',
                'My Account',
                'My Orders',
                'Track My Order',
                'Shipping & Returns',
                'Apply For Credit',
                'International Sales',
                'Sales tax Info',
                'W-9 Form',
                'Catalog',
                'Product Recall / Safety Info',
                'Floor Care Machine Self-Service',
            ],
        },
        {
            title: 'Services',
            content: [
                'Extended Service Plan',
                'Limited Warranty Information',
                'Affiliate Program',
                'Government Sales',
                'Resellers',
                'Become A Supplier',
                'Safety Services',
                'Subject Matter Experts',
                'Teritory Sales Manger',
                'Accessibilty Options',
            ],
        },
        {
            title: 'More Ways To Shop',
            content: [
                'Inventory Clearance',
                'Free Shipping',
                'New Products',
                'Knowledge Center',
                'Industrial How-Tos',
            ],
        },
        {
            title: 'Need Help? Contact us',
            content: ['Live Chat', 'Email Us', '855-388-9348'],
        },
    ];

    const handleSearch = () => console.log('Search query:', searchText);

    return (
        <View style={styles.container}>
            {accordionData.map((item, i) => (
                <Accordion key={i} title={item.title} variant="footer">
                    {item.content.map((text, idx) => (
                        <Text key={idx} style={styles.accordionItem}>
                            {text}
                        </Text>
                    ))}
                </Accordion>
            ))}

            <Text style={styles.deals}>
                Be the first one to know about special deals & events
            </Text>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email for newsletter"
                    value={searchText}
                    onChangeText={setSearchText}
                    returnKeyType="search"
                    onSubmitEditing={handleSearch}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none" />
                <TouchableOpacity style={styles.button} onPress={handleSearch}>
                    <FontAwesome name="long-arrow-right" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.iconRow}>
                <FontAwesome name="facebook" size={22} color="black" />
                <Entypo name="linkedin" size={22} color="black" />
                <Entypo name="youtube" size={22} color="black" />
                <Entypo name="twitter" size={22} color="black" />
                <Entypo name="instagram" size={22} color="black" />
            </View>

            <View style={styles.bottomBar}>
                <Image
                    source={require('../../assets/images/image.png')}
                    style={styles.logo}
                    resizeMode="contain" />

                <View style={styles.pickerWrapper}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={setSelectedValue}
                        style={styles.picker}
                        dropdownIconColor="#858585"
                        itemStyle={styles.pickerItem} >
                        <Picker.Item label="English" value="US-English" />
                        <Picker.Item label="Canada" value="CA-English" />
                    </Picker>

                    <View style={styles.pickerLabel}>
                        <Image
                            source={flags[selectedValue.startsWith('US') ? 'US' : 'CA']}
                            style={styles.flag}
                        />
                        <Text style={styles.pickerText}>
                            {selectedValue.startsWith('US') ? 'US English' : 'CA English'}
                        </Text>
                    </View>
                </View>
            </View>

            <Text style={styles.copyrightText}>
                Copyright © 2025 by Global Equipment Company Inc. All Rights Reserved.
                Shop With Confidence - 30 Day Satisfaction Guarantee
            </Text>
            <Text style={styles.tncText}>Terms & Conditions | Privacy Policy</Text>
        </View>
    );
};


export default Footer;