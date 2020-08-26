import React from 'react';
import {ActivityIndicator, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {calculateScreenPercent} from '~/helper/getDimensionsScreen';

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
    color,
    children,
    style,
  } = rest;

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
      styleSize = styles.xLargeSize;
      break;
    default:
      styleSize = styles.mediumSize;
      break;
  }

  const styleButton = [
    solid && [styles.container, styles.solid(color), styleSize],
    outline && [styles.container, styles.outline(color), styleSize],
    text && [styles.container, styles.text, styleSize],
    rounded && [styles.container, styles.rounded, styleSize],
    fab && [styles.fab(color)],
    style,
  ];

  return (
    <TouchableOpacity style={styleButton}>
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
  solid: (color) => ({
    backgroundColor: color,
  }),
  outline: (color) => ({
    backgroundColor: 'transparent',
    borderColor: color,
    borderWidth: 1.5,
  }),
  text: {
    backgroundColor: 'transparent',
  },
  rounded: {
    borderRadius: 30,
  },
  fab: (color) => ({
    backgroundColor: color,
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  smallSize: {
    height: 30,
    width: calculateScreenPercent(20, 'width'),
  },
  mediumSize: {
    height: 40,
    width: calculateScreenPercent(40, 'width'),
  },
  largeSize: {
    height: 56,
    width: calculateScreenPercent(60, 'width'),
  },
  xLargeSize: {
    height: 50,
    width: calculateScreenPercent(90, 'width'),
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
  color: PropTypes.string.isRequired,
};

Button.defaultProps = {
  loading: false,
  size: 'medium',
};

export default Button;
