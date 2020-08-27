import React from 'react';
import {View} from 'react-native';

import Header from '../Header';
import Input from '~/components/Input';

import {Container} from './styles';

const InputScreen = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Input" />

      <Input placeholder="Digite seu nome" />
    </Container>
  );
};

export default InputScreen;
