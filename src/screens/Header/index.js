import React from 'react';
import {View} from 'react-native';
import Icon from '~/components/Icon';

import {
  HeaderContainer,
  HeaderTitleContainer,
  ButtonBack,
  Title,
} from './styles';

const Header = ({navigation, route, title}) => {
  return (
    <View style={{width: '100%'}}>
      <HeaderContainer>
        <HeaderTitleContainer>
          <ButtonBack onPress={() => navigation.navigate(route)}>
            <Icon name="arrow-left" size={30} color="white" />
          </ButtonBack>

          <Title h2 light white center>
            {title}
          </Title>
        </HeaderTitleContainer>
      </HeaderContainer>
    </View>
  );
};

export default Header;
