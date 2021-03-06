import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { $white } from '@modules/colors';
import styles from './style';

const Button = ({
  text, scheme = 'primary', onClick, style, loading
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.container, styles[scheme], style]}
    onPress={onClick}
  >
    {loading ? (
      <ActivityIndicator color={$white} />
    ) : (
      <Text style={[styles.text, styles[`${scheme}_text`]]}>{text.toUpperCase()}</Text>
    )}
  </TouchableOpacity>
);

export default Button;
