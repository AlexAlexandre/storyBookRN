import React from 'react';

import {Container} from './styles';
import Header from '../Header';
const Buttons = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} route="HomeScreen" title="Botões" />
    </Container>
  );
};

export default Buttons;
