import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

import userAvatar from '~/assets/default-avatar-60.png';
import {PropsType} from 'react-native/ReactCommon/hermes/inspector/tools/msggen/src/Type';

const availableSizes = {
  small: 50,
  medium: 70,
  large: 95,
  xlarge: 150,
};

export default function Avatar({source, ...rest}) {
  const img = source ? source : userAvatar;
  const {size, rounded, onPress, onLongPress, style} = rest;

  const avatarSize = typeof size === 'number' ? size : availableSizes[size];
  const styleAvatar = [rounded && [styles.rounded(avatarSize)], style];

  return (
    <>
      {onPress || onLongPress ? (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
          <Image
            source={img}
            style={[styles.container(avatarSize), styleAvatar]}
          />
        </TouchableOpacity>
      ) : (
        <Image
          source={img}
          style={[styles.container(avatarSize), styleAvatar]}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: (avatarSize) => ({
    borderRadius: 8,
    resizeMode: 'contain',
    height: avatarSize,
    width: avatarSize,
  }),
  rounded: (avatarSize) => ({
    borderRadius: avatarSize / 2,
  }),
});

Avatar.propTypes = {
  source: PropTypes.any,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    PropTypes.number,
  ]),
  rounded: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

Avatar.defaultProps = {
  source: userAvatar,
  size: 'medium',
};
