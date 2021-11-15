import React from 'react';
import { Text, View } from 'react-native';
import Logo from '@components/atoms/logo';
import useKeyboard from '@modules/hooks/useKeyboard';
import styles from './style';

const Header = ({ style, title }) => {
  const { keyboardShown } = useKeyboard();
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.background, keyboardShown && styles.backgroundKeyboardOpen]} />
      <Logo style={[styles.image, keyboardShown && styles.imageKeyboardOpen]} />
      {!keyboardShown && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default Header;
