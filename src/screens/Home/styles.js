import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #787b8a;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 200;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 20px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  margin: 0 30px;
  margin-top: 32px;
  background-color: #fff;
  border-radius: 4;
  height: 52;
  align-items: center;
  justify-content: center;
`;
