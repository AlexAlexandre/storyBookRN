import React from 'react';
import Home from './screens/Home';
import {SafeAreaView, StatusBar} from 'react-native';

const Index = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Home />
    </>
  );
};

export default Index;
