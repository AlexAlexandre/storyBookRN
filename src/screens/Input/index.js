import React from 'react';

import Header from '../Header';
import Input from '~/components/Input';
import Icon from '~/components/Icon';

import * as theme from '~/theme';

import {Container} from './styles';

const InputScreen = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Input" />

      <Input
        placeholder="Digite seu nome"
        solid
        solidColor={theme.colors.gray}
      />

      <Input
        placeholder="Digite seu e-mail"
        solid
        solidColor={theme.colors.gray}
        leftIcon={<Icon name="email" size={30} color={theme.colors.accent} />}
      />

      <Input
        placeholder="Digite seu usuario"
        solid
        solidColor={theme.colors.gray}
        rightIcon={
          <Icon name="account" size={30} color={theme.colors.accent} />
        }
      />

      <Input
        placeholder="Digite seu nome"
        outline
        borderColor={theme.colors.accent}
        leftIcon={<Icon name="email" size={30} color={theme.colors.accent} />}
      />

      <Input
        placeholder="Digite seu nome"
        inline
        borderColor={theme.colors.accent}
        placeholderTextColor={theme.colors.accent}
        leftIcon={<Icon name="email" size={30} color={theme.colors.accent} />}
      />
    </Container>
  );
};

export default InputScreen;
