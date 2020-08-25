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
        <Button loading={true} solid size="x-large" />

        <Button solid size="x-large">
          <TextStyled white>Botão solido</TextStyled>
        </Button>

        <Button outline size="x-large">
          <TextStyled>Botão outline</TextStyled>
        </Button>

        <Button rounded solid size="x-large">
          <TextStyled white>Botão com borda</TextStyled>
        </Button>

        <Button rounded outline size="x-large">
          <TextStyled>Botão com borda</TextStyled>
        </Button>

        <Button text>
          <TextStyled>Botão apenas de text</TextStyled>
        </Button>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Button
            outline
            iconLeft
            icon={
              <Icon
                name="thumb-up-outline"
                size={28}
                color={theme.colors.primary}
                style={{marginRight: 8}}
              />
            }>
            <TextStyled>Icone na esquerda</TextStyled>
          </Button>

          <Button
            solid
            iconRight
            icon={
              <Icon
                name="thumb-up-outline"
                size={28}
                color={theme.colors.white}
                style={{marginLeft: 8}}
              />
            }>
            <TextStyled white>Icone na direita</TextStyled>
          </Button>
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Button
            fab
            icon={
              <Icon
                name="account-outline"
                size={40}
                color={theme.colors.white}
              />
            }
          />

          <Button
            icon={
              <Icon name="account" size={40} color={theme.colors.primary} />
            }
          />
        </View>

        <Button solid size="small">
          <TextStyled white title>
            small
          </TextStyled>
        </Button>

        <Button solid size="medium">
          <TextStyled white title>
            medium
          </TextStyled>
        </Button>

        <Button solid size="large">
          <TextStyled white title>
            large
          </TextStyled>
        </Button>

        <Button solid size="x-large">
          <TextStyled white title>
            X-large
          </TextStyled>
        </Button>
      </View>
    </Container>
  );
};

export default ButtonsScreen;
