import { StyleSheet } from 'react-native';
import { $gray } from '@modules/colors';

export default StyleSheet.create({
  inputDropdown: {
    borderColor: $gray
  },
  viewContainer: { zIndex: 1 },
  androidContainer: {
    minHeight: 500,
    marginBottom: -340
  }
});
