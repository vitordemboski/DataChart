import React from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { isiOS } from '../../../modules/utils';

const PageInput = ({ style, children }) => (
  <KeyboardAvoidingView enabled={isiOS} behavior="padding" style={{ flex: 1 }}>
    <SafeAreaView style={style}>{children}</SafeAreaView>
  </KeyboardAvoidingView>
);

export default PageInput;
