import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import store, { history } from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#568a92',
        },
    },
});

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
