import { StyleSheet } from 'react-native';
import { $primaryColor, $white } from '@modules/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  primary: {
    width: '70%',
    backgroundColor: $primaryColor,
    height: 66
  },
  white: {
    width: '80%',
    backgroundColor: $white,
    height: 75
  },
  white_text: {
    color: $primaryColor
  },
  outline: {
    backgroundColor: 'transparent',
    height: 75,
    borderWidth: 1,
    width: '80%',
    borderColor: $white
  },
  text: {
    color: $white,
    fontSize: 18,
    lineHeight: 24
  }
});
