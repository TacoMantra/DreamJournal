import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#486a6f',
    },
  },
});

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available
const store = configureStore(history);

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
