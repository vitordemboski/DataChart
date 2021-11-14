import { StyleSheet } from 'react-native';
import { $white, $primaryColor } from '@modules/colors';
import { isiOS } from '../../../modules/utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30
  },
  background: {
    backgroundColor: $primaryColor,
    height: 300,
    width: '100%',
    position: 'absolute',
    top: -100,
    left: 0,
    zIndex: -1,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,

    shadowColor: $primaryColor,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41
  },
  image: {
    marginTop: isiOS ? 20 : 30
  },
  title: {
    fontSize: 25,
    lineHeight: 36,
    color: $white,
    marginTop: 24
  }
});
