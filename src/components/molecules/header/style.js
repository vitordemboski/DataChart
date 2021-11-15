import { StyleSheet } from 'react-native';
import { $white, $primaryColor } from '@modules/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 3,
    paddingTop: 20,
    backgroundColor: $white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41
  },
  image: {
    width: 100,
    height: 58
  },
  text: {
    color: $primaryColor,
    fontSize: 18
  },
  background: {
    backgroundColor: $white,
    position: 'absolute',
    top: -50,
    height: 50,
    width: '100%'
  }
});
