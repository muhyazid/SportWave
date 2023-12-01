// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Navigation/Router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
