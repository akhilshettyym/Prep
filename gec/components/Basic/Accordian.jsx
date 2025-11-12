import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Entypo from '@expo/vector-icons/Entypo';
import { styles } from '../../assets/styles/Accordian';

const Accordion = ({ title, children, variant = 'footer' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = variant === 'pdp' ? pdpTheme : footerTheme;

  return (
    <View
      style={[
        styles.accordionContainer,
        { backgroundColor: theme.bgColor, borderBottomColor: theme.borderColor },
      ]}
    >
      <TouchableOpacity
        style={[styles.header, { backgroundColor: theme.bgColor }]}
        onPress={() => setIsExpanded(!isExpanded)}
        activeOpacity={0.8}
      >
        <Text style={[styles.headerText, { color: theme.headerTextColor }]}>
          {title}
        </Text>
        <Entypo
          name={isExpanded ? 'chevron-thin-up' : 'chevron-thin-down'}
          size={20}
          color={theme.headerTextColor}
        />
      </TouchableOpacity>

      <Collapsible collapsed={!isExpanded}>
        <View style={[styles.content, { backgroundColor: theme.bgColor }]}>
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              style: [child.props.style, { color: theme.textColor }],
            })
          )}
        </View>
      </Collapsible>
    </View>
  );
};

const footerTheme = {
  bgColor: '#004e7d',
  headerTextColor: '#fff',
  textColor: '#fff',
  borderColor: 'hsla(0, 0%, 100%, 0.23)',
};

const pdpTheme = {
  bgColor: '#fff',
  headerTextColor: '#000',
  textColor: '#333',
  borderColor: '#e0e0e0',
};

export default Accordion;