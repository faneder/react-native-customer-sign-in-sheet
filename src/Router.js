import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CustomerList from './components/CustomerList';
import CustomerCreate from './components/CustomerCreate';
import CustomerEdit from './components/CustomerEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>
        <Scene key="main">
          <Scene
            onRight={() => Actions.customerCreate()}
            rightTitle="Add"
            key="customerList"
            component={CustomerList}
            title="Customer List"
            initial
          />
          <Scene
            key="customerCreate"
            component={CustomerCreate}
            title="Customer Create"
          />
          <Scene
            key="customerEdit"
            component={CustomerEdit}
            title="Customer Edit"
          />
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;