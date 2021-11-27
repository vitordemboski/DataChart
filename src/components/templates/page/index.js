import React from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import Header from '@components/molecules/header';

const Page = ({ style, children, isLogout }) => (
  <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0 }}>
    <Header isLogout={isLogout} />
    <SafeAreaView style={style}>{children}</SafeAreaView>
  </View>
);

export default Page;
