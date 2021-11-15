import { StyleSheet } from 'react-native';
import { $white, $primaryColor } from '@modules/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: $primaryColor,
    marginHorizontal: 10,
    marginTop: 20
  },
  active: {
    marginBottom: 20,
    marginTop: 0
  },
  lineColor: {
    height: 5,
    width: '100%',
    position: 'absolute',
    top: 0
  },
  text: {
    textAlign: 'center',
    color: $white,
    fontSize: 12,
    maxWidth: '90%'
  }
});
