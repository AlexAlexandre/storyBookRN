import React from 'react';
import {View, FlatList} from 'react-native';

import Header from '../Header';
import TextStyled from '~/components/TextStyled';
import ListItem from '../../components/ListItem';

import * as theme from '~/theme';

import {Container} from './styles';

const ListScreen = ({navigation}) => {
  const fullList = [
    {
      id: '1',
      title: 'item 1',
      iconRight: 'default',
      iconLeft: {
        name: 'account',
        size: 30,
        color: theme.colors.disabled,
      },
    },
    {
      id: '2',
      title: 'item 2',
      iconRight: 'default',
      iconLeft: {
        name: 'email',
        size: 30,
        color: theme.colors.disabled,
      },
    },
    {
      id: '3',
      title: 'item 3',
      iconRight: 'default',
      iconLeft: {
        name: 'lock',
        size: 30,
        color: theme.colors.disabled,
      },
    },
  ];
  const simpleList = [
    {
      id: '1',
      title: 'item 1',
    },
    {
      id: '2',
      title: 'item 2',
    },
    {
      id: '3',
      title: 'item 3',
    },
  ];

  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Listas" />

      <TextStyled h2 light center style={{margin: 10}}>
        Lista Completa
      </TextStyled>

      <FlatList
        data={fullList}
        renderItem={({item}) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />

      <TextStyled h2 light center style={{margin: 10}}>
        Lista Simples
      </TextStyled>

      <FlatList
        data={simpleList}
        renderItem={({item}) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default ListScreen;
