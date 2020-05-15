import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './stote';

import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Hr from './components/HR/Hr';
import Finance from './components/Finance/Finance';
import Notfound from './components/layout/Notfound';

//Private Route
import PrivateRoute from './routing/PrivateRoute';

//
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Switch>
            <PrivateRoute exact path='/' component={Hr} />
            <PrivateRoute exact path='/finance' component={Finance} />
            <Route exact path='/login' component={Login} />
            <Route path='' component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
