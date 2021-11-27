import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import Header from '@components/molecules/header';
import { isiOS } from '../../../modules/utils';

const PageInput = ({ style, children, isHeader }) => (
  <KeyboardAvoidingView
    enabled={isiOS}
    behavior="padding"
    style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0 }}
  >
    {isHeader && <Header />}
    <SafeAreaView style={style}>{children}</SafeAreaView>
  </KeyboardAvoidingView>
);

export default PageInput;
