import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { AlarmReducer } from '../features';

const createStore = (history: History): EnhancedStore => {
    const rootReducer = combineReducers({
        alarms: AlarmReducer,
        router: connectRouter(history),
    });

    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
    });
};

export type AppState = ReturnType<typeof rootReducer>;

export default createStore;
