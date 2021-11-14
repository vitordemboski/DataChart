/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '@components/atoms/button';
import HeaderWelcome from '@components/molecules/header-welcome';
import Input from '@components/atoms/input';
import PageInput from '@components/templates/page-input';
import UserService from '@modules/api/api-user';

import Link from '@components/atoms/link';
import styles from './style';
import Storage from '../../../modules/services/storage';

export default function SignIn({ navigation, route }) {
  const [email, setEmail] = useState(route.params?.email);
  const [password, setPassword] = useState(route.params?.password);
  const [loading, setLoading] = useState(false);

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSubmit = async () => {
    if (!email || !password) return;
    setLoading(true);
    try {
      const { data } = await UserService.signIn({ email, password });
      await Storage.setItem('user', data);
      navigation.navigate('Auth');
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <PageInput style={styles.container}>
      <HeaderWelcome title="Faça seu login" />
      <View style={styles.wrapper}>
        <Input
          style={styles.inputEmail}
          iconName="user"
          keyboardType="email-address"
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          secure
          iconName="lock"
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.row}>
          <Text style={styles.textLink} numberOfLines={1}>
            Não tem uma conta ?
          </Text>
          <Link style={styles.link} onClick={goToSignUp}>
            Cadastre-se
          </Link>
        </View>
      </View>
      <Button style={styles.button} text="LOGAR" onClick={handleSubmit} loading={loading} />
    </PageInput>
  );
}
