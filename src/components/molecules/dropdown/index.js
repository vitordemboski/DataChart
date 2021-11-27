import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './style';

const Dropdown = ({
  items, style, onChangeItem, value
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View
      style={[styles.viewContainer, Platform.OS === 'android' && open && styles.androidContainer]}
    >
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        listMode="SCROLLVIEW"
        items={items}
        value={value}
        style={[styles.inputDropdown, style]}
        dropDownContainerStyle={styles.inputDropdown}
        setValue={onChangeItem}
      />
    </View>
  );
};

export default Dropdown;
