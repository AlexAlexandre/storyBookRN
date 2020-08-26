import React from 'react';
import {View} from 'react-native';

import {Container} from './styles';
import Header from '../Header';
import Avatar from '~/components/Avatar';
import TextStyled from '../../components/TextStyled';

const AvatarScreen = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Avatar" />

      <TextStyled h2 light>
        Tamanhos
      </TextStyled>

      <TextStyled h3 light>
        originais
      </TextStyled>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center', margin: 10}}>
          <Avatar size="small" />
          <TextStyled>small</TextStyled>
        </View>

        <View style={{alignItems: 'center', margin: 10}}>
          <Avatar size="medium" rounded />
          <TextStyled>medium</TextStyled>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center', margin: 10}}>
          <Avatar size="large" rounded />
          <TextStyled>large</TextStyled>
        </View>

        <View style={{alignItems: 'center', margin: 10}}>
          <Avatar size="xlarge" />
          <TextStyled>xlarge</TextStyled>
        </View>
      </View>
    </Container>
  );
};

export default AvatarScreen;
