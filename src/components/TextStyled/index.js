import React from 'react';
import {Text, StyleSheet} from 'react-native';

import * as theme from '~/theme';

const styles = StyleSheet.create({
  // fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  title: theme.fonts.title,
  body: theme.fonts.body,
  caption: theme.fonts.caption,
  small: theme.fonts.small,

  // variations
  bold: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
  semibold: {
    fontWeight: '500',
    fontFamily: 'Montserrat-SemiBold',
  },
  light: {
    fontWeight: '200',
    fontFamily: 'Montserrat-Light',
  },
  // position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  // colors
  primary: {color: theme.colors.primary},
  secondary: {color: theme.colors.secondary},
  tertiary: {color: theme.colors.tertiary},
  accent: {color: theme.colors.accent},
  auxiliary: {color: theme.colors.auxiliary},
  black: {color: theme.colors.black},
  white: {color: theme.colors.white},
  gray: {color: theme.colors.gray},
  gray2: {color: theme.colors.gray2},
  disabled: {color: theme.colors.disabled},
  transparent: {color: theme.colors.transparent},
});

export default function TextStyled({children, ...rest}) {
  const {
    h1,
    h2,
    h3,
    title,
    body,
    caption,
    small,
    size,
    // styling
    bold,
    semibold,
    light,
    center,
    right,
    // colors
    color,
    primary,
    secondary,
    tertiary,
    accent,
    auxiliary,
    black,
    white,
    gray,
    gray2,
    disabled,
    transparent,
    style,
  } = rest;

  const textStyles = [
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,
    small && styles.small,
    size && {fontSize: size},
    bold && styles.bold,
    semibold && styles.semibold,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && styles[color],
    color && !styles[color] && {color},
    // color shortcuts
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    accent && styles.accent,
    auxiliary && styles.auxiliary,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    gray2 && styles.gray2,
    disabled && styles.disabled,
    transparent && styles.transparent,
    style, // rewrite predefined styles
  ];

  return (
    <Text {...rest} style={textStyles}>
      {children}
    </Text>
  );
}
