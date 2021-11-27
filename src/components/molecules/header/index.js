import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Logo from '@components/atoms/logo';
import Storage from '@modules/services/storage';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Icon from '../../atoms/icon';
import { $primaryColor } from '../../../modules/colors';

const Header = ({ style, isLogout }) => {
  const { navigate, goBack } = useNavigation();

  const onLogout = () => {
    Storage.removeItem('user');
    navigate('Welcome');
  };

  const onGoBack = () => {
    goBack();
  };

  const hitSlop = {
    top: 10,
    bottom: 10,
    left: 20,
    right: 20
  };

  return (
    <View style={styles.shadow}>
      <View style={[styles.container, style]}>
        {!isLogout && (
          <TouchableOpacity hitSlop={hitSlop} onPress={onGoBack}>
            <Icon name="chevronLeft" color={$primaryColor} />
          </TouchableOpacity>
        )}
        <Logo style={styles.image} />
        {isLogout ? (
          <TouchableOpacity style={styles.buttonLogout} hitSlop={hitSlop} onPress={onLogout}>
            <Text style={styles.text}>Sair</Text>
            <Icon name="chevronRight" color={$primaryColor} height={11} width={9} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 8 }} />
        )}
      </View>
      <View style={styles.background} />
    </View>
  );
};

export default Header;
