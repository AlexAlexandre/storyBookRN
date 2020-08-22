import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Home from './screens/Home';

const Index = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Home />
    </>
  );
};

export default Index;
