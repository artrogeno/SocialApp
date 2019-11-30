import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import * as firebase from 'firebase';

import {isEmail, validPassword} from '../../../shared/pipe';
import {
  SafeAreaView,
  View,
  Container,
  Greeting,
  ContainerForm,
  FormLabel,
  FormInput,
  TouchableOpacity,
  TouchableOpacitySignUp,
  TouchText,
  TouchSignUpText,
  ContainerError,
  ErrorMessage,
} from './styles';

export default function Login(props) {
  props.navigation.header = false;
  const [form, setForm] = useState({
    email: '',
    password: '',
    errorMessage: null,
  });

  const handleLogin = () => {
    const {email, password} = form;
    if (isEmail(email) && validPassword(password)) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => setForm({errorMessage: error.message}));
    } else {
      setForm({errorMessage: 'Invalid inputs'});
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView>
        <Container>
          <Greeting>Login</Greeting>

          <ContainerError>
            {form.errorMessage && (
              <ErrorMessage>{form.errorMessage}</ErrorMessage>
            )}
          </ContainerError>

          <ContainerForm>
            <View>
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

          <TouchableOpacity onPress={() => handleLogin()}>
            <TouchText>Sign in</TouchText>
          </TouchableOpacity>

          <TouchableOpacitySignUp
            onPress={() => props.navigation.navigate('Register')}>
            <TouchSignUpText>
              <TouchSignUpText>New to socialApp? </TouchSignUpText>
              <TouchSignUpText style={{color: '#5A7566'}}>
                {' '}
                Sign up
              </TouchSignUpText>
            </TouchSignUpText>
          </TouchableOpacitySignUp>
        </Container>
      </SafeAreaView>
    </>
  );
}
