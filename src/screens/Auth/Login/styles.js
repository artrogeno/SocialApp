import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components';

// #5A7566
// #8BA28C
// #DFBFA0
// #F47439
// #D25353
// #6082BE
// #2A2A97

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  height: 100%;
`;

export const View = styled.View``;

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Greeting = styled.Text`
  color: #888;
  font-size: 18px;
  font-weight: 200;
  text-align: center;
  padding-top: 32px;
  padding-bottom: 20px;
`;

export const ContainerForm = styled.View`
  margin: 0 30px;
  margin-bottom: 48px;
`;

export const FormLabel = styled.Text`
  color: #aaa;
  font-size: 11;
  text-transform: uppercase;
`;

export const FormInput = styled.TextInput`
  border-bottom-color: #888;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  height: 40px;
  font-size: 15;
  color: #222;
`;

export const Text = styled.Text`
  color: #222;
  font-size: 24px;
  font-weight: 200;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 20px;
`;

export const ContainerError = styled.View`
  height: 72px;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
`;

export const ErrorMessage = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #d25353;
  text-align: center;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  margin: 0 30px;
  margin-top: 32px;
  background-color: #5a7566;
  border-radius: 4;
  height: 52;
  align-items: center;
  justify-content: center;
`;

export const TouchableOpacitySignUp = styled.TouchableOpacity`
  margin: 0 30px;
  margin-top: 32px;
  background-color: transparent;
  border-radius: 4;
  height: 52;
  align-items: center;
  justify-content: center;
`;

export const TouchText = styled.Text`
  font-weight: 500;
  color: #fff;
`;

export const TouchSignUpText = styled.Text`
  font-weight: 500;
  color: #aaa;
`;
