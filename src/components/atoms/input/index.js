import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { $gray } from '@modules/colors';
import styles from './style';

const Input = ({
  value,
  onChangeText,
  style,
  placeholder,
  iconName,
  styleInput,
  keyboardType,
  secure
}) => (
  <View style={[styles.container, style]}>
    {iconName && <Feather style={styles.icon} name="airplay" size={20} color={$gray} />}
    <TextInput
      hitSlop={{
        bottom: 10,
        top: 10,
        left: 20 + 20,
        right: 20 + 20
      }}
      secureTextEntry={secure}
      style={[styles.input, styleInput]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  </View>
);

export default Input;
