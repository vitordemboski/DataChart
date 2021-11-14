import { StyleSheet } from 'react-native';
import { $gray, $white } from '@modules/colors';
import { isiOS } from '../../../modules/utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: $white,
    paddingHorizontal: 10,
    paddingVertical: isiOS ? 20 : 15,
    borderWidth: 1,
    borderColor: $gray,
    width: '100%'
  },
  input: {
    color: $gray,
    flex: 1,
    fontFamily: 'ZillaSlab_400Regular',
    fontSize: 18,
    lineHeight: 22
  },
  icon: {
    marginRight: 10
  }
});
