import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image} from 'react-native';

import userAvatar from '~/assets/default-avatar-60.png';

const availableSizes = {
  small: 50,
  medium: 70,
  large: 95,
  xlarge: 150,
};

export default function Avatar({source, ...rest}) {
  const img = source ? source : userAvatar;
  const {size} = rest;
  const avatarSize = typeof size === 'number' ? size : availableSizes[size];

  return <Image source={img} style={styles.container(avatarSize)} />;
}

const styles = StyleSheet.create({
  container: (avatarSize) => ({
    borderRadius: avatarSize / 2,
    resizeMode: 'contain',
    height: avatarSize,
    width: avatarSize,
  }),
});

Avatar.propTypes = {
  source: PropTypes.any,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    PropTypes.number,
  ]),
};

Avatar.defaultProps = {
  source: userAvatar,
  size: 'medium',
};
