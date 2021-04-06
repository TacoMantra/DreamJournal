import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { AlarmReducer } from '../features';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

const rootReducer = combineReducers({
    alarms: AlarmReducer,
    router: connectRouter(history),
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type AppState = ReturnType<typeof rootReducer>;

export { history };

export default store;
