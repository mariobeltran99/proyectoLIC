import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '../states/app.states';
import { navigationReducers } from './navigation.reducers';
import { storageMetaReducers } from './store.metareducers';

export const reducers: ActionReducerMap<AppState> = {
  navigation: navigationReducers
};

export const metaReducers: MetaReducer<AppState>[] = [storageMetaReducers];
