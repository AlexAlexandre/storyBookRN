import React from 'react';
import {View} from 'react-native';

import Button from '~/components/Button';
import Header from '../Header';
import {Container} from './styles';

import * as theme from '~/theme';
import TextStyled from '../../components/TextStyled';

const ButtonsScreen = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Botões" />

      <View style={{alignItems: 'center'}}>
        <Button loading={true} solid />
        <Button title="Botão solido" solid />
        <Button title="Botão outline" outline />
        <Button title="Botão com borda" rounded solid />
        <Button title="Botão com borda" rounded outline />
        <Button title="Botão text" text />
      </View>
    </Container>
  );
};

export default ButtonsScreen;
