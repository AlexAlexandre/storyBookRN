import React from 'react';
import {View} from 'react-native';

import Button from '~/components/Button';
import Header from '../Header';
import {Container} from './styles';

import * as theme from '~/theme';
import TextStyled from '../../components/TextStyled';
import Icon from '../../components/Icon';

const ButtonsScreen = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Botões" />

      <View style={{alignItems: 'center'}}>
        <Button loading={true} solid />

        <Button solid>
          <TextStyled white>Botão solido</TextStyled>
        </Button>

        <Button outline>
          <TextStyled>Botão outline</TextStyled>
        </Button>

        <Button rounded solid>
          <TextStyled>Botão com borda</TextStyled>
        </Button>

        <Button rounded outline>
          <TextStyled>Botão com borda</TextStyled>
        </Button>

        <Button text>
          <TextStyled>Botão apenas de text</TextStyled>
        </Button>

        <Button
          outline
          iconLeft="thumb-up-outline"
          iconSize={28}
          iconColor={theme.colors.primary}>
          <TextStyled>Icone na esquerda</TextStyled>
        </Button>

        <Button
          outline
          iconRight="thumb-up-outline"
          iconSize={28}
          iconColor={theme.colors.primary}>
          <TextStyled>Icone na direita</TextStyled>
        </Button>

        <Button fab icon="account-outline" iconSize={40} />
      </View>
    </Container>
  );
};

export default ButtonsScreen;
