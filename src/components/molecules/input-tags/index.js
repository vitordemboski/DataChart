import React, { useState } from 'react';
import {
  Text, TextInput, TouchableOpacity, View
} from 'react-native';
import Icon from '../../atoms/icon';
import Input from '../../atoms/input';
import styles from './style';

const InputTags = ({
  styleInput,
  values = [],
  placeholder,
  keyboardType,
  onAddTag,
  onRemoveTag
}) => {
  const [textInput, setText] = useState(false);

  const onChangeText = (text) => {
    setText(text);
  };

  const handleAdd = () => {
    if (!textInput) return;
    onAddTag(textInput.trim());
    setText('');
  };

  const handleRemoveTag = (index) => {
    onRemoveTag(index);
  };

  return (
    <Input style={styles.container}>
      {values
        && values.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleRemoveTag(index)}
            style={styles.item}
            key={index.toString()}
          >
            <Text>{item}</Text>
            <View style={styles.buttonClose}>
              <Icon name="close" color="#000" height={8} width={7} />
            </View>
          </TouchableOpacity>
        ))}
      <TextInput
        style={[styles.input, styleInput]}
        onChangeText={onChangeText}
        onSubmitEditing={handleAdd}
        blurOnSubmit={false}
        value={textInput || ''}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      <TouchableOpacity onPress={handleAdd} style={styles.buttonPlus}>
        <Text style={styles.textPlus}>+</Text>
      </TouchableOpacity>
    </Input>
  );
};

export default InputTags;
