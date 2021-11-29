import { StyleSheet } from 'react-native';
import { $gray } from '@modules/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    padding: 3,
    backgroundColor: $gray,
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    margin: 4,
    zIndex: 20
  },
  input: {
    flex: 1,
    minWidth: 90,
    fontFamily: 'ZillaSlab_400Regular'
  },
  buttonPlus: {
    paddingLeft: 10
  },
  textPlus: {
    fontSize: 24
  },
  textClose: {
    fontSize: 14
  },
  buttonClose: {
    marginLeft: 5
  }
});
