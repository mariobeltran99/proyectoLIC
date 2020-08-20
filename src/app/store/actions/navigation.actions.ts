import { createAction, props } from '@ngrx/store';

export const toggleNavigationStatus = createAction(
  '[Navigation] Toggle Navigation Status',
  props<{ flag: boolean }>()
);
