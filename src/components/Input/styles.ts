import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin-bottom: 8px;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  background: #232129;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
