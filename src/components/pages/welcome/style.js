import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4B7CBF90'
  },
  button: {
    marginBottom: 50
  },
  logo: {
    position: 'absolute',
    top: '10%',
    height: 114,
    width: 280
  },
  wrapper: {
    flex: 1
  },
  buttons: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: 50 }]
  }
});
