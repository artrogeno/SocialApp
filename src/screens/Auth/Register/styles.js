import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components';

export const View = styled.View``;

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding-top: ${getStatusBarHeight()}px;
`;

export const ContainerGreeting = styled.View`
  position: absolute;
  top: 46;
  align-items: center;
  width: 100%;
`;

export const Greeting = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 200;
  text-align: center;
  padding-bottom: 5;
`;

export const TouchableOpacityAvatar = styled.TouchableOpacity`
  width: 100;
  height: 100;
  border-radius: 50;
  background-color: rgba(21, 22, 40, 0.1);
  margin-top: 14;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.View`
  margin: 0 30px;
  margin-top: 2;
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
  padding-top: 190;
  height: 72px;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  margin-bottom: 20px;
  background-color: transparent;
`;

export const ErrorMessage = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #d25353;
  text-align: center;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  margin: 0 30px;
  margin-top: 5px;
  background-color: #5a7566;
  border-radius: 4;
  height: 52;
  align-items: center;
  justify-content: center;
`;

export const TouchableOpacitySignIn = styled.TouchableOpacity`
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

export const TouchSignInText = styled.Text`
  font-weight: 500;
  color: #aaa;
`;

export const TouchableOpacityIcon = styled.TouchableOpacity`
  position: absolute;
  top: 48;
  left: 30;
  height: 32;
  width: 32;
  border-radius: 16;
  background-color: rgba(21, 22, 40, 0.1);
  align-items: center;
  justify-content: center;
`;
