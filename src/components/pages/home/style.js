import { StyleSheet } from 'react-native';
import {
  $background, $gray3A, $primaryColor, $white
} from '@modules/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $background
  },
  list: {
    width: '100%',
    flexGrow: 0,
    marginBottom: 10
  },
  header: {
    marginTop: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    color: $gray3A,
    maxWidth: '90%'
  },
  buttonAdd: {
    backgroundColor: $primaryColor,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: $primaryColor,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    alignSelf: 'center',
    marginVertical: 10
  },
  buttonAddText: {
    fontSize: 45,
    color: $white,
    alignSelf: 'center'
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: `${$primaryColor}20`,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textEdit: {
    color: $primaryColor,
    marginRight: 3
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
