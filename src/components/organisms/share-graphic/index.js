import React from 'react';
import { TouchableOpacity, PixelRatio, Share } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import Icon from '../../atoms/icon';
import styles from './style';

const targetPixelCount = 1080; // If you want full HD pictures
const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
// pixels * pixelratio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
const pixels = targetPixelCount / pixelRatio;

const ShareGraphic = ({ viewRef, title, setLoadingShare }) => {
  const shareImage = async () => {
    try {
      const uri = await captureRef(viewRef.current, {
        height: pixels,
        width: pixels,
        quality: 0.8,
        format: 'png'
      });
      setLoadingShare(false);
      await Share.share({ url: uri, title });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.buttonShare}
      onPress={async () => {
        setLoadingShare(true);
        setTimeout(async () => {
          await shareImage();
        }, 100);
      }}
    >
      <Icon name="share" />
    </TouchableOpacity>
  );
};

export default ShareGraphic;
