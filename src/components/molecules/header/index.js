import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Logo from '@components/atoms/logo';
import Storage from '@modules/services/storage';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Header = ({ style }) => {
  const { navigate } = useNavigation();
  const onLogout = () => {
    Storage.removeItem('user');
    navigate('Welcome');
  };

  return (
    <View>
      <View style={[styles.container, style]}>
        <Logo style={styles.image} />
        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.text}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.background} />
    </View>
  );
};

export default Header;
