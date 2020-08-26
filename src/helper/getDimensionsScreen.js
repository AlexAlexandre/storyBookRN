import {Dimensions} from 'react-native';

const getWidthScreen = () => {
  return Math.round(Dimensions.get('window').width);
};

const getHeightScreen = () => {
  return Math.round(Dimensions.get('window').height);
};

/**
 * Função que retorna, um numero x de acordo com o tamanho da tela.
 * Exemplo, se eu quiser uma div com 20% da tela, ele me devolve exatamente
 * quantos pixels representa essa porcentagem
 *
 * @param percent
 * @param type (height or width)
 * @returns {number}
 */
const calculateScreenPercent = (percent, type) => {
  if (type == 'width') {
    return Math.round((getWidthScreen() / 100) * percent);
  }

  return (getHeightScreen() / 100) * percent;
};

export {getWidthScreen, getHeightScreen, calculateScreenPercent};
