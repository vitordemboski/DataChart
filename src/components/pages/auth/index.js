/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { View } from 'react-native';

import Storage from '@modules/services/storage';

const Auth = (props) => {
  useEffect(() => {
    const load = async () => {
      const user = await Storage.getItem('user');

      const isUserLoggedIn = user;

      const { navigate } = props.navigation;
      if (isUserLoggedIn) {
        navigate('Welcome');
      } else {
        navigate('Welcome');
      }
    };
    load();
  }, []);
  return <View />;
};

export default Auth;
