import { StyleSheet } from 'react-native';
import { $gray, $white, $gray3A } from '@modules/colors';
import { isiOS } from '../../../modules/utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: $white,
    paddingHorizontal: 10,
    paddingVertical: isiOS ? 20 : 10,
    borderWidth: 1,
    borderColor: $gray,
    width: '100%'
  },
  input: {
    color: $gray3A,
    flex: 1,
    fontFamily: 'ZillaSlab_400Regular',
    fontSize: 15,
    lineHeight: 22
  },
  icon: {
    marginRight: 10
  }
});
