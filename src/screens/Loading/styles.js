import React, {useEffect} from 'react';
import {StatusBar, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

import {Container, Text} from './styles';

export default function Loading(props) {
  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .onAuthStateChanged(user =>
          props.navigation.navigate(user ? 'App' : 'Auth'),
        );
    }, 500);
  });

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#787B8A" />
      <Container>
        <Text>Loading Screen</Text>
        <ActivityIndicator size="large" />
      </Container>
    </>
  );
}
