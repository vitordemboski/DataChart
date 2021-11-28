/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '@components/atoms/button';
import Input from '@components/atoms/input';
import Link from '@components/atoms/link';

import HeaderWelcome from '@components/molecules/header-welcome';

import PageInput from '@components/templates/page-input';

import UserService from '@modules/api/api-user';

import styles from './style';
import { showMessageError } from '../../../modules/utils';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSubmit = async () => {
    if (!email || !password || !firstName || !lastName) {
      showMessageError('Preencha os campos');
      return;
    }
    setLoading(true);
    try {
      await UserService.signUp({
        email,
        password,
        firstName,
        lastName
      });
      setLoading(false);
      navigation.navigate('SignIn', { email, password });
    } catch (e) {
      showMessageError('Dados inválidos');
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <PageInput style={styles.container}>
      <HeaderWelcome title="Faça seu cadastro" />
      <View style={styles.wrapper}>
        <Input
          style={styles.inputMargin}
          iconName="user"
          keyboardType="email-address"
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.inputMargin}
          iconName="user"
          placeholder="Nome"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Input
          style={styles.inputMargin}
          iconName="user"
          placeholder="Sobrenome"
          value={lastName}
          onChangeText={setLastName}
        />
        <Input
          secure
          iconName="lock"
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.row}>
          <Text style={styles.textLink}>Já possui conta ?</Text>
          <Link style={styles.link} onClick={goToSignIn}>
            Logar-se
          </Link>
        </View>
      </View>
      <Button style={styles.button} text="CADASTRE-SE" loading={loading} onClick={handleSubmit} />
    </PageInput>
  );
}
