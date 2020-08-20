import { Action, ActionReducer } from '@ngrx/store';
import { merge, pick } from 'lodash-es';

const setSavedState = (state: any, key: string): void => {
  localStorage.setItem(key, JSON.stringify(state));
};

const getSavedState = (key: string) => {
  return JSON.parse(localStorage.getItem(key));
};

const stateKeys = [
  'navigation'
];

const localStorageKey = 'store';

// tslint:disable-next-line: typedef
export function storageMetaReducers<S, A extends Action = Action>(
  reducer: ActionReducer<S, A>
) {
  let stored = false;
  return (state: S, action: A): S => {
    const nextState = reducer(state, action);
    if (!stored) {
      stored = true;
      const savedState = getSavedState(localStorageKey);
      return merge(nextState, savedState);
    }

    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStorageKey);
    return nextState;
  };
}
