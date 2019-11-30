import React, {useState, useEffect} from 'react';
import {StatusBar, LayoutAnimation} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';

import {isEmail, validPassword, validName} from '../../../shared/pipe';
import {
  View,
  Container,
  ContainerGreeting,
  Greeting,
  TouchableOpacityAvatar,
  ContainerForm,
  FormLabel,
  FormInput,
  TouchableOpacity,
  TouchableOpacitySignIn,
  TouchableOpacityIcon,
  TouchText,
  TouchSignInText,
  ContainerError,
  ErrorMessage,
} from './styles';

export default function Register(props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    errorMessage: null,
  });

  const handleSignUp = () => {
    const {name, email, password} = form;
    if (validName(name) && isEmail(email) && validPassword(password)) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials =>
          userCredentials.user.updateProfile({
            displayName: name,
          }),
        )
        .catch(error => setForm({errorMessage: error.message}));
    } else {
      setForm({errorMessage: 'Invalid inputs'});
    }
  };

  useEffect(() => LayoutAnimation.easeInEaseOut());

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Container>
        <TouchableOpacityIcon onPress={() => props.navigation.goBack()}>
          <Icon name="ios-arrow-round-back" size={32} color="#fff" />
        </TouchableOpacityIcon>
        <ContainerGreeting>
          <Greeting>Register</Greeting>
          <TouchableOpacityAvatar>
            <Icon
              name="md-add"
              size={46}
              color="#fff"
              style={{marginTop: 6, marginLeft: 2}}
            />
          </TouchableOpacityAvatar>
        </ContainerGreeting>

        <ContainerError>
          {form.errorMessage && (
            <ErrorMessage>{form.errorMessage}</ErrorMessage>
          )}
        </ContainerError>

        <ContainerForm>
          <View>
            <FormLabel>Full name:</FormLabel>
            <FormInput
              autoCaptalize="none"
              onChangeText={name => setForm({...form, name})}
              value={form.name}
            />
          </View>
          <View style={{marginTop: 32}}>
            <FormLabel>Email Address:</FormLabel>
            <FormInput
              autoCaptalize="none"
              onChangeText={email => setForm({...form, email})}
              value={form.email}
            />
          </View>
          <View style={{marginTop: 32}}>
            <FormLabel>Password:</FormLabel>
            <FormInput
              autoCaptalize="none"
              secureTextEntry
              onChangeText={password => setForm({...form, password})}
              value={form.password}
            />
          </View>
        </ContainerForm>

        <TouchableOpacity onPress={() => handleSignUp()}>
          <TouchText>Sign up</TouchText>
        </TouchableOpacity>

        <TouchableOpacitySignIn
          onPress={() => props.navigation.navigate('Login')}>
          <TouchSignInText>
            <TouchSignInText>New to SocialApp? </TouchSignInText>
            <TouchSignInText style={{color: '#5A7566'}}> Login</TouchSignInText>
          </TouchSignInText>
        </TouchableOpacitySignIn>
      </Container>
    </>
  );
}
