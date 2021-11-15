import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '@components/molecules/header';

const Page = ({ style, children }) => (
  <SafeAreaView style={style}>
    <Header />
    {children}
  </SafeAreaView>
);

export default Page;
