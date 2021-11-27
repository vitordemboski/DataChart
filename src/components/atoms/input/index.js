import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './style';
import Icon from '../icon';

const Input = ({
  value = '',
  onChangeText,
  style,
  placeholder,
  iconName,
  styleInput,
  keyboardType,
  secure,
  children
}) => (
  <View style={[styles.container, style]}>
    {iconName && <Icon style={styles.icon} name={iconName} width={16} height={16} />}
    {children || (
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
    )}
  </View>
);

export default Input;
