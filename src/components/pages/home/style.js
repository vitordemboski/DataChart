import { StyleSheet } from 'react-native';
import { $background, $gray3A } from '@modules/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $background
  },
  list: {
    width: '100%',
    flexGrow: 0,
    marginBottom: 20
  },
  header: {
    marginTop: 25,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    color: $gray3A,
    maxWidth: '90%'
  }
});
