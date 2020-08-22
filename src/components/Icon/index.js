import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

export default function Icon({name, size, color}) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
}
