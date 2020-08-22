import React from 'react';
import {ActivityIndicator, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import TextStyled from '../TextStyled';
import * as theme from '~/theme';

const Button = ({loading, title, ...rest}) => {
  const {solid, outline, text, rounded, style} = rest;

  const buttonStyles = [
    solid && styles.solid,
    outline && styles.outline,
    text && styles.text,
    rounded && styles.rounded,
    style,
  ];

  return (
    <TouchableOpacity style={[styles.container, buttonStyles]}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <TextStyled>{title}</TextStyled>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 46,
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
});

Button.prototype = {
  loading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  solid: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
