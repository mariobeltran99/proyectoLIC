import { NavigationState, navigationInitialState } from './navigation.states';

export interface AppState {
  navigation: NavigationState;
}

export const initialState: AppState = {
  navigation: navigationInitialState
};

export const getInitialState = (): AppState => initialState;
