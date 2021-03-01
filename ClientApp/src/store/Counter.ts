import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface CounterState {
  count: number;
}

export interface IncrementCountAction { type: 'INCREMENT_COUNT' }
export interface DecrementCountAction { type: 'DECREMENT_COUNT' }

export type KnownAction = IncrementCountAction | DecrementCountAction;

export const actionCreators = {
  increment: (): IncrementCountAction => ({ type: 'INCREMENT_COUNT' } as IncrementCountAction),
  decrement: (): DecrementCountAction => ({ type: 'DECREMENT_COUNT' } as DecrementCountAction),
};

export const reducer: Reducer<CounterState> = (
  state: CounterState | undefined, incomingAction: Action,
): CounterState => {
  if (state === undefined) {
    return { count: 0 };
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { count: state.count + 1 };
    case 'DECREMENT_COUNT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
