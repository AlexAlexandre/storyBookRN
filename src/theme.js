const colors = {
  primary: '#DB0000',
  secondary: '#8A5082',
  tertiary: '#6F5F90',
  accent: '#A5CAD2',
  auxiliary: '#758EB7',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#EEEEEE',
  gray2: '#F6F5F5',
  blueLight: '#0295CE',
  disabled: '#808080',
  transparent: 'rgba(0, 0, 0, 0.1)',
};

const sizes = {
  // global sizes
  base: 12,
  font: 12,
  border: 10,

  // font sizes
  h1: 32,
  h2: 26,
  h3: 18,
  title: 16,
  body: 12,
  caption: 14,
  small: 8,
};

const fonts = {
  h1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.h1,
  },
  h2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.h2,
  },
  h3: {
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.h3,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
  small: {
    fontSize: sizes.small,
  },
};

export {colors, sizes, fonts};
