import { Component } from '@angular/core';
import { FormItemStore } from '../../redux/form-items.store';

@Component({
  selector: 'mfw-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent {

  readonly formItems$ = this.formItemStore.forms$;

  constructor(
    private formItemStore: FormItemStore
  ) { }

  deleteElement(formId: number): void {
    this.formItemStore.deleteFormItem(formId);
  }
}
