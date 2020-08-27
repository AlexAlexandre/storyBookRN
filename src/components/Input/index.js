import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput} from 'react-native';

function Input({style, ...rest}, ref) {
  const {
    solid,
    outline,
    inline,
    solidColor,
    borderColor,
    leftIcon,
    rightIcon,
  } = rest;

  const styleInput = [
    solid && [styles.container, styles.solid(solidColor)],
    outline && [styles.container, styles.outline(borderColor)],
    inline && [styles.container, styles.inline(borderColor)],
    style,
  ];

  return (
    <View style={styleInput}>
      {leftIcon && leftIcon}

      <TextInput
        style={styles.input}
        placeholderTextColor="#000000"
        ref={ref}
        {...rest}
      />

      {rightIcon && rightIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
    height: 46,
  },
  input: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: '#000000',
  },
  solid: (solidColor) => ({
    backgroundColor: solidColor,
  }),
  outline: (borderColor) => ({
    borderColor: borderColor,
    borderWidth: 1,
  }),
  inline: (borderColor) => ({
    borderColor: borderColor,
    borderBottomWidth: 1,
  }),
});

Input.PropTypes = {
  solid: PropTypes.bool,
  outline: PropTypes.bool,
  inline: PropTypes.bool,
  solidColor: PropTypes.string,
  borderColor: PropTypes.string,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default forwardRef(Input);
