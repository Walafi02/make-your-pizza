import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <Router history={history}>
      <Routes />
    </Router>
    <GlobalStyles />
  </>
);

export default App;
