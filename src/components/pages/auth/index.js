/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Storage from '@modules/services/storage';
import { decode } from 'base-64';

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    decode(base64)
      .split('')
      .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
}

function isAuthenticated(token) {
  try {
    const { exp } = parseJwt(token);
    if (exp < (new Date().getTime() + 1) / 1000) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return true;
}

const Auth = (props) => {
  useEffect(() => {
    const load = async () => {
      const userToken = await Storage.getItem('user');
      const isUserLoggedIn = userToken && isAuthenticated(userToken.token);

      const { navigate } = props.navigation;
      if (isUserLoggedIn) {
        navigate('Home');
      } else {
        navigate('Welcome');
      }
    };
    load();
  }, []);
  return <View />;
};

export default Auth;
