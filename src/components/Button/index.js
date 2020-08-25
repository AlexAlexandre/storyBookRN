import React, {useEffect} from 'react';
import {ActivityIndicator, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import * as theme from '~/theme';

const Button = ({loading, ...rest}) => {
  const {
    solid,
    outline,
    text,
    rounded,
    fab,
    icon,
    iconLeft,
    iconRight,
    size,
    children,
    style,
  } = rest;

  const styleButton = [
    solid && [styles.container, styles.solid],
    outline && [styles.container, styles.outline],
    text && [styles.container, styles.text],
    rounded && [styles.container, styles.rounded],
    fab && [styles.fab],
    style,
  ];

  console.log('fab');
  console.log(fab);

  let styleSize;
  switch (size) {
    case 'small':
      styleSize = styles.smallSize;
      break;
    case 'medium':
      styleSize = styles.mediumSize;
      break;
    case 'large':
      styleSize = styles.largeSize;
      break;
    case 'x-large':
      console.log('x-large');
      styleSize = styles.xLargeSize;
      break;
    default:
      styleSize = styles.mediumSize;
      break;
  }

  return (
    <TouchableOpacity style={[styleButton, styleSize]}>
      {loading ? (
        <ActivityIndicator size="small" color="#E3F2FD" />
      ) : (
        <>
          {iconLeft && icon}

          {!children && icon}

          {children}

          {iconRight && icon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  solid: {
    backgroundColor: theme.colors.primary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: theme.colors.primary,
    borderWidth: 1.5,
  },
  text: {
    backgroundColor: 'transparent',
  },
  rounded: {
    borderRadius: 30,
  },
  fab: {
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
    height: 46,
    width: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallSize: {
    height: 30,
    width: '20%',
  },
  mediumSize: {
    height: 40,
    width: '40%',
  },
  largeSize: {
    height: 56,
    width: '60%',
  },
  xLargeSize: {
    height: 50,
    width: '90%',
  },
});

Button.prototype = {
  loading: PropTypes.bool,
  children: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  solid: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  fab: PropTypes.bool,
  icon: PropTypes.object,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  size: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  size: 'medium',
};

export default Button;
