import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #ccc;
  font-size: 24px;
  font-weight: 200;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 20px;
`;
