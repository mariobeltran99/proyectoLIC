import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormTypeOptions } from '../../constants/form-type-options.constants';
import { FormItemStore } from '../../redux/form-items.store';

@Component({
  selector: 'mfw-generation-selector-form',
  templateUrl: './generation-selector-form.component.html',
  styleUrls: ['./generation-selector-form.component.scss']
})
export class GenerationSelectorFormComponent {

  generationSelectorForm: FormGroup;
  formTypeOptions = getFormTypeOptions();

  constructor(
    private formBuilder: FormBuilder,
    private formItemStore: FormItemStore
  ) {
    this.initFormBuilderGenerationSelector();
  }

  initFormBuilderGenerationSelector(): void {
    this.generationSelectorForm = this.formBuilder.group({
      formType: [null, [Validators.required]],
      label: [null, [Validators.required]],
      args: [null]
    });
  }

  addFormItem(): void {
    if (this.generationSelectorForm.valid) {
      const { formType, args, label } = this.generationSelectorForm.value;
      this.formItemStore.addFormItem({
        ...formType, args, label,
        id: Math.round(Math.random() * 1e6)
      });
      this.resetGenerationSelectorForm();
    }
  }
  resetGenerationSelectorForm() {
    this.generationSelectorForm.reset();
    Object.keys(this.generationSelectorForm.controls).forEach((key) => {
      this.generationSelectorForm.controls[key].setErrors(null);
    });
  }
  hasError(controlName: string, errorName: string): boolean {
    return this.generationSelectorForm.get(controlName)?.hasError(errorName);
  }
}
