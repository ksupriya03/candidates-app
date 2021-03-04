import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import Store from './Store';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={Store}>
      <Router history={history}>
        <div>
          <Routes />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
