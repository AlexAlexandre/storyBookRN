import React from 'react';
import {View, Alert} from 'react-native';

import Header from '../Header';
import Avatar from '~/components/Avatar';
import TextStyled from '~/components/TextStyled';

import {Container} from './styles';

const AvatarScreen = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Avatar" />

      <TextStyled h2 light>
        Tamanhos
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
          <Avatar
            size="large"
            rounded
            onLongPress={() => {
              Alert.alert('teste clique longo');
            }}
          />
          <TextStyled>large</TextStyled>
        </View>

        <View style={{alignItems: 'center', margin: 10}}>
          <Avatar
            size="xlarge"
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
          />
          <TextStyled>xlarge</TextStyled>
        </View>
      </View>
    </Container>
  );
};

export default AvatarScreen;
