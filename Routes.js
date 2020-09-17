import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './pages/Login';
import Register from './pages/Register';
import TabScreen from './pages/TabScreen';

function Routes () {
  return (
    <Router>
    <Stack key="root" hideNavBar>
      <Scene key="login" component={Login} title="Login" initial />
      <Scene key="register" component={Register} title="Register" />
      <Scene key="news" component={TabScreen} title="TabScreen" />
    </Stack>
  </Router>
  );
};

export default Routes;