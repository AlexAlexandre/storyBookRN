import React from 'react';
import {ScrollView, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TextStyled from '~/components/TextStyled';
import ListItem from '~/components/ListItem';
import {Container, FromContainer} from './styles';

import ButtonsScreen from '../Buttons';
import AvatarScreen from '../Avatar';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const menuList = [
    {
      id: '1',
      title: 'Botões',
      iconRight: 'default',
      onPress: () => {
        navigation.navigate('ButtonsScreen');
      },
    },
    {
      id: '2',
      title: 'Avatar',
      iconRight: 'default',
      onPress: () => {
        navigation.navigate('AvatarScreen');
      },
    },
    {
      id: '3',
      title: 'Input',
      iconRight: 'default',
    },
    {
      id: '4',
      title: 'Listas',
      iconRight: 'default',
    },
  ];

  return (
    <Container>
      <ScrollView>
        <TextStyled h1 light primary center>
          Seja bem vindo devs!
        </TextStyled>
        <TextStyled h3 light style={{textAlign: 'justify', padding: 10}}>
          Este app tem como finalidade servir como um story book com todos os
          componentes mapeados e documentados para utilizar em projetos futuros
        </TextStyled>

        <FlatList
          data={menuList}
          renderItem={({item}) => <ListItem data={item} />}
          keyExtractor={(item) => item.id}
        />

        <FromContainer>
          <TextStyled semibold light>
            from
          </TextStyled>
          <TextStyled caption light>
            LEX-TEC
          </TextStyled>
          <TextStyled semibold light style={{marginTop: 10}}>
            V 0.0.1
          </TextStyled>
        </FromContainer>
      </ScrollView>
    </Container>
  );
};

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ButtonsScreen" component={ButtonsScreen} />
        <Stack.Screen name="AvatarScreen" component={AvatarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
