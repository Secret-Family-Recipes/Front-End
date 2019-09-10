import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './components/DesignComponents/theme';
import GlobalStyles from './components/DesignComponents/GlobalStyles';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

/*
  set up routes
  test react-font-picker
*/

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.register();
