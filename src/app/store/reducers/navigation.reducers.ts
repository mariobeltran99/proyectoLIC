import { NavigationState, navigationInitialState } from '../states/navigation.states';
import { Action, createReducer, on } from '@ngrx/store';
import * as navigationActions from '../actions/navigation.actions';

const reducer = createReducer<NavigationState>(
  navigationInitialState,
  on(navigationActions.toggleNavigationStatus, (state, { flag }) => ({ ...state, navigationLoading: flag }))
);

export const navigationReducers = (state: NavigationState | undefined, action: Action) => {
  return reducer(state, action);
};
