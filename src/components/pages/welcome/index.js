import * as React from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import Background from '@assets/background.png';
import Logo from '@components/atoms/logo';
import Button from '@components/atoms/button';
import styles from './style';

export default function Welcome({ navigation }) {
  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground resizeMode="stretch" style={styles.wrapper} source={Background}>
      <SafeAreaView style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.buttons}>
          <Button onClick={goToSignUp} style={styles.button} scheme="outline" text="CADASTRE-SE" />
          <Button onClick={goToSignIn} style={styles.button} scheme="white" text="LOGAR" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
