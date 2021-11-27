import React from 'react';
import { Image } from 'react-native';
import Logo from '@assets/logo.png';
import styles from './style';

const LogoComponent = ({ height = 81, width = 200, style }) => (
  <Image style={[styles.image(height, width), style]} source={Logo} />
);

export default LogoComponent;
