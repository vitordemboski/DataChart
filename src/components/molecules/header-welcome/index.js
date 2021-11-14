import React from 'react';
import { Text, View } from 'react-native';
import Logo from '@components/atoms/logo';
import styles from './style';

const HeaderSignup = ({ style, title }) => (
  <View style={[styles.container, style]}>
    <View style={styles.background} />
    <Logo style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default HeaderSignup;
