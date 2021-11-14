import { StyleSheet } from 'react-native';
import { $background, $gray } from '@modules/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: $background
  },
  wrapper: {
    width: '80%'
  },
  inputMargin: {
    marginBottom: 20
  },
  textLink: {
    color: $gray,
    fontSize: 18
  },
  link: {
    marginLeft: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10
  },
  button: {
    marginBottom: 10
  }
});
