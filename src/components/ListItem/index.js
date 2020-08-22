import React from 'react';
import {View} from 'react-native';
import TextStyled from '../TextStyled';
import Icon from '../Icon';

import {List} from './styles';

export default function ListItem({data}) {
  const {iconRight} = data;

  function renderIconRight() {
    if (iconRight == 'default') {
      return <Icon name="chevron-right" size={30} color="gray" />;
    }

    if (iconRight instanceof Object) {
      return (
        <Icon
          name={iconRight.name}
          size={iconRight.size}
          color={iconRight.color}
        />
      );
    }
  }

  return (
    <View>
      <List onPress={data.onPress}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {data.iconLeft && (
            <Icon
              name={data.iconLeft.name}
              size={data.iconLeft.size}
              color={data.iconLeft.color}
            />
          )}

          <TextStyled title light style={{marginLeft: 15}}>
            {data.title}
          </TextStyled>
        </View>

        {renderIconRight()}
      </List>
    </View>
  );
}
