import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Link = ({ children, onClick, style }) => (
  <TouchableOpacity style={style} onPress={onClick}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

export default Link;
