import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';

import TextStyled from '~/components/TextStyled';
import ListItem from '~/components/ListItem';
import {Container} from './styles';

const Home = () => {
  const menuList = [
    {
      id: '1',
      title: 'Botões',
      iconRight: 'default',
    },
    {
      id: '2',
      title: 'Avatar',
      iconRight: 'default',
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
      </ScrollView>
    </Container>
  );
};

export default Home;
