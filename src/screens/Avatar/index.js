import React from 'react';

import {Container} from './styles';
import Header from '../Header';

const AvatarScreen = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Avatar" />
    </Container>
  );
};

export default AvatarScreen;
