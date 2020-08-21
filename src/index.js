import React from 'react';
import {View, Text} from 'react-native';
import TextStyled from './components/TextStyled';

const Index = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextStyled h1>Hello Word</TextStyled>
      <TextStyled>Hello Word</TextStyled>
    </View>
  );
};

export default Index;
