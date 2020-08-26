import React from 'react';
import {View} from 'react-native';

import Button from '~/components/Button';
import TextStyled from '~/components/TextStyled';
import Icon from '~/components/Icon';

import Header from '../Header';
import * as theme from '~/theme';

import {Container} from './styles';

const ButtonsScreen = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Botões" />

      <View style={{alignItems: 'center'}}>
        <Button
          loading={true}
          solid
          size="x-large"
          color={theme.colors.primary}
        />

        <Button solid size="x-large" color={theme.colors.primary}>
          <TextStyled white>Botão solido</TextStyled>
        </Button>

        <Button outline size="x-large" color={theme.colors.primary}>
          <TextStyled>Botão outline</TextStyled>
        </Button>

        <Button rounded solid size="x-large" color={theme.colors.secondary}>
          <TextStyled white>Botão com borda</TextStyled>
        </Button>

        <Button rounded outline size="x-large" color={theme.colors.secondary}>
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
            color={theme.colors.primary}
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
            color={theme.colors.primary}
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
            color={theme.colors.primary}
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

        <Button solid size="small" color={theme.colors.primary}>
          <TextStyled white title>
            small
          </TextStyled>
        </Button>

        <Button solid size="medium" color={theme.colors.primary}>
          <TextStyled white title>
            medium
          </TextStyled>
        </Button>

        <Button solid size="large" color={theme.colors.primary}>
          <TextStyled white title>
            large
          </TextStyled>
        </Button>

        <Button solid size="x-large" color={theme.colors.primary}>
          <TextStyled white title>
            X-large
          </TextStyled>
        </Button>
      </View>
    </Container>
  );
};

export default ButtonsScreen;
