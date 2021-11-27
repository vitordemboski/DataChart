import { StyleSheet } from 'react-native';
import { $background, $gray73 } from '@modules/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: $background,
    alignItems: 'center'
  },
  wrapper: {
    width: '80%',
    marginTop: 20,
    flex: 1
  },
  textInput: {
    color: $gray73,
    fontWeight: 'bold',
    marginBottom: 10
  },
  wrapperInput: {
    marginBottom: 12
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    height: 60
  },
  bottom: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end'
  }
});
