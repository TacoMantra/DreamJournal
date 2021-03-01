import * as Counter from './Counter';

// The top-level state object
export interface ApplicationState {
  counter: Counter.CounterState | undefined;
}

export const reducers = {
  counter: Counter.reducer,
};

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
