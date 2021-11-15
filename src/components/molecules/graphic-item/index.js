import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

const Graphic = ({ item, onClick, activeGraphic }) => {
  const isActive = activeGraphic?.id === item.id;
  return (
    <TouchableOpacity
      onPress={() => onClick(item)}
      style={[styles.container, isActive && styles.active]}
    >
      <View style={[styles.lineColor, { backgroundColor: `#${item.cor || '000000'}` }]} />
      <Text style={styles.text}>{item.titulo}</Text>
    </TouchableOpacity>
  );
};

export default Graphic;
