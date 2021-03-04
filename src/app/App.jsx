import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Store from './Store';

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={Store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
