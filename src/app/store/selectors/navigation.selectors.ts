import { AppState } from '../states/app.states';
import { createSelector } from '@ngrx/store';

const getNavigationState = (state: AppState) => state.navigation;

export const getNavigationStatus = createSelector(
  getNavigationState,
  (state) => (state.navigationLoading)
);
