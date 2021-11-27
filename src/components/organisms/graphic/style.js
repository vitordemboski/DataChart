import { StyleSheet } from 'react-native';
import { $background } from '@modules/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  graphic: {
    backgroundColor: $background
  },
  wrapper: {
    backgroundColor: $background
  }
});
