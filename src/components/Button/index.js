import React from 'react';
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
    children,
    style,
  } = rest;

  const buttonStyles = [
    solid && [styles.container, styles.solid],
    outline && [styles.container, styles.outline],
    text && [styles.container, styles.text],
    rounded && [styles.container, styles.rounded],
    fab && [styles.fab],
    style,
  ];

  return (
    <TouchableOpacity style={buttonStyles}>
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
    width: '90%',
    height: 46,
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
};

Button.defaultProps = {
  loading: false,
};

export default Button;
