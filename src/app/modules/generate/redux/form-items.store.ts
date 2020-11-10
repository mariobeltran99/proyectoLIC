import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormItemState } from '../interfaces/form-item-state';
import { FormTypeOption } from '../interfaces/form-type-option';

@Injectable()
export class FormItemStore extends ComponentStore<FormItemState> {
  constructor() {
    super({ forms: [] });
  }

  readonly forms$ = this.select((state) => (state.forms));

  readonly addFormItem = this.updater((state, formTypeOption: FormTypeOption) => ({
    ...state,
    forms: [...state.forms, formTypeOption]
  }));

  readonly deleteFormItem = this.updater((state, formId: number) => ({
    ...state,
    forms: state.forms.filter((formItem) => (formItem.id !== formId))
  }));
}
