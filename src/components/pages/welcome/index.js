import * as React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import Background from '@assets/background.png';
import Logo from '@assets/logo.png';

export default function Welcome() {
  return (
    <ImageBackground resizeMode="stretch" style={{ flex: 1 }} source={Background}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4B7CBF80'
        }}
      >
        <Image style={{ width: 280, height: 114 }} source={Logo} />
      </View>
    </ImageBackground>
  );
}
