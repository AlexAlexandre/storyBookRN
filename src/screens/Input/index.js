import React from 'react';
import {View} from 'react-native';

import Header from '../Header';
import Input from '~/components/Input';
import Icon from '~/components/Icon';

import * as theme from '~/theme';

import {Container} from './styles';

const InputScreen = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Input" />

      <Input placeholder="Digite seu nome" style={{marginTop: 20}} />

      <Input
        placeholder="Digite seu e-mail"
        leftIcon={<Icon name="email" size={30} color={theme.colors.accent} />}
        style={{marginTop: 20}}
      />

      <Input
        placeholder="Digite seu usuario"
        rightIcon={
          <Icon name="account" size={30} color={theme.colors.accent} />
        }
        style={{marginTop: 20}}
      />
    </Container>
  );
};

export default InputScreen;
