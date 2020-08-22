import styled from 'styled-components';
import * as theme from '~/theme';
import TextStyled from '~/components/TextStyled';

export const HeaderContainer = styled.View`
  background-color: ${theme.colors.secondary};
  border-bottom-left-radius: 80px;
`;

export const HeaderTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 60px 25px;
`;

export const Title = styled(TextStyled)`
  margin-left: 115px;
`;

export const ButtonBack = styled.TouchableOpacity``;
