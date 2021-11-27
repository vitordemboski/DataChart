import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { $white } from '../../../modules/colors';
import Icon from '../../atoms/icon';
import styles from './style';

const Graphic = ({
  item, onClick, onRemove, activeGraphic, index
}) => {
  const isActive = activeGraphic?.id === item.id;
  return (
    <TouchableOpacity
      onPress={() => onClick(item, index)}
      style={[styles.container, isActive && styles.active]}
    >
      <View style={[styles.lineColor, { backgroundColor: `#${item.cor || '000000'}` }]} />
      <Text style={styles.text}>{item.titulo}</Text>
      <TouchableOpacity
        onPress={() => onRemove(item, index)}
        activeOpacity={0.8}
        style={styles.buttonClose}
      >
        <Icon name="close" color={$white} height={9} width={9} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Graphic;
