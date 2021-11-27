/* eslint-disable no-bitwise */
import React from 'react';
import { Platform, Text } from 'react-native';

export const isiOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const getDescriptionGraphic = (tipo) => {
  switch (tipo) {
    case 0:
      return 'Linha';
    case 2:
      return 'Barra';
    case 4:
      return 'Pizza';
    default:
      return 'Linha';
  }
};
export const getHexColorGraphic = color => `#${color || '000'}`;
export const getHexToRgbColor = hex => hex
  .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
  .substring(1)
  .match(/.{2}/g)
  .map(x => parseInt(x, 16));

export const configureFontWeight = () => {
  const oldRender = Text.render;

  const settings = [
    {
      fontFamily: 'ZillaSlab_300Light',
      fontWeight: 'normal'
    },
    {
      fontFamily: 'ZillaSlab_400Regular',
      fontWeight: 'normal'
    },
    {
      fontFamily: 'ZillaSlab_500Medium',
      fontWeight: 'normal'
    },
    {
      fontFamily: 'ZillaSlab_600SemiBold',
      fontWeight: 'normal'
    },
    {
      fontFamily: 'ZillaSlab_700Bold',
      fontWeight: 'bold'
    }
  ];

  const defaultIndex = 2;

  const someStyleHasFontWeight = (styles) => {
    if (!styles) return false;
    if (typeof styles.length !== 'undefined') {
      let indexPlus = false;
      styles.forEach((style, i) => {
        if (!style) return;
        if (typeof style.fontWeight !== 'undefined') indexPlus = i + 1;
      });
      return indexPlus;
    }

    return styles.fontWeight !== 'undefined';
  };

  Text.render = (...args) => {
    const origin = oldRender.call(this, ...args);

    let useIndex = defaultIndex;
    const hasFontWeight = someStyleHasFontWeight(origin.props.style);

    if (typeof origin.props.style !== 'undefined' && hasFontWeight) {
      const fontWeight = hasFontWeight && origin.props.style[hasFontWeight - 1]
        ? origin.props.style[hasFontWeight - 1].fontWeight
        : origin.props.style.fontWeight;
      if (fontWeight === '100' || fontWeight === '200' || fontWeight === '300') {
        useIndex = 0;
      } else if (fontWeight === '400') {
        useIndex = 1;
      } else if (fontWeight === '500' || fontWeight === 'normal') {
        useIndex = 2;
      } else if (fontWeight === '600') {
        useIndex = 3;
      } else if (
        fontWeight === '700'
        || fontWeight === '800'
        || fontWeight === '900'
        || fontWeight === 'bold'
      ) {
        useIndex = 4;
      }
    }

    const style = [settings[defaultIndex], origin.props.style, settings[useIndex]];

    return React.cloneElement(origin, {
      style
    });
  };
};
