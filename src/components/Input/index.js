import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput} from 'react-native';

import * as theme from '~/theme';

function Input({style, ...rest}, ref) {
  const {leftIcon, rightIcon} = rest;
  const styleInput = [style, styles.container];

  return (
    <View style={styleInput}>
      {leftIcon && leftIcon}
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.black}
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
    height: 46,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  input: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: theme.colors.black,
  },
});

Input.PropTypes = {
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default forwardRef(Input);
