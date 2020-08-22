import React from 'react';

import {Container} from './styles';
import Header from '../Header';

const Avatar = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Avatar" />
    </Container>
  );
};

export default Avatar;
