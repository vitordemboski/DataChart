/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import {
  useFonts,
  ZillaSlab_300Light,
  ZillaSlab_300Light_Italic,
  ZillaSlab_400Regular,
  ZillaSlab_400Regular_Italic,
  ZillaSlab_500Medium,
  ZillaSlab_500Medium_Italic,
  ZillaSlab_600SemiBold,
  ZillaSlab_600SemiBold_Italic,
  ZillaSlab_700Bold,
  ZillaSlab_700Bold_Italic
} from '@expo-google-fonts/zilla-slab';
import { configureFontWeight } from '@modules/utils';
import AppLoading from 'expo-app-loading';
import AppContainer from './src/router';

function App() {
  const [fontsLoaded] = useFonts({
    ZillaSlab_300Light,
    ZillaSlab_300Light_Italic,
    ZillaSlab_400Regular,
    ZillaSlab_400Regular_Italic,
    ZillaSlab_500Medium,
    ZillaSlab_500Medium_Italic,
    ZillaSlab_600SemiBold,
    ZillaSlab_600SemiBold_Italic,
    ZillaSlab_700Bold,
    ZillaSlab_700Bold_Italic
  });

  useEffect(() => {
    if (fontsLoaded) {
      configureFontWeight();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <AppContainer />;
}

export default App;
