import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler'; // Importando um botão retangular

// Sempre que for estilizar um componente que venha
// do react-native, deve ser importado dentro de parênteses
export const Container = styled(RectButton)`
  margin-top: 8px;
  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background-color: #ff9000;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #312e38;
`;
