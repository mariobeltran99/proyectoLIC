import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generateCode } from "./generate-code";

type InputTypes = 'email' | 'text' | 'number' | 'checkbox' | 'radio' | 'textarea' | 'select' | 'file';

@Component({
  selector: 'gf-application-layout',
  templateUrl: './application-layout.component.html',
  styleUrls: ['./application-layout.component.scss']
})
export class ApplicationLayoutComponent implements OnInit {
  ngOnInit(): void {
  }
  formArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.formArray = this.fb.array([]);
  }


  getFormGroup(inputType: InputTypes, args = []): FormGroup {
    const validators = this.getValidators(inputType, false, args);
    return this.fb.group({
      value: [null, [...validators]],
      type: [inputType],
      args: [args],
      id: [`random_name_${Math.round(Math.random() * 100)}`]
    });
  }

  getValidators(inputType: InputTypes, required: boolean = true, args = []): any[] {
    const requiredValidator = required ? [Validators.required] : [];
    switch (inputType) {
      case 'email': return [
        ...requiredValidator,
        Validators.email
      ];
      case 'text': return [...requiredValidator];
      case 'number': {
        const min = args[0] ?? 0;
        const max = args[1] ?? 1e1000;
        return [
          Validators.pattern(`^[0-9]{1,}\$`),
          Validators.min(min),
          Validators.max(max)
        ];
      }
      default: return [];
    }
  }

  getForms(): FormGroup[] {
    return this.formArray?.controls as FormGroup[] ?? [];
  }

  onClickPush(type: InputTypes, args = []): void {
    this.formArray.push(
      this.getFormGroup(type, args)
    );
  }

  typeGroups(type: InputTypes): number {
    switch (type) {
      case 'text': case 'email': case 'checkbox': case 'number': case 'file': return 1;
      case 'textarea': return 2;
      case 'radio': return 3;
      case 'select': return 4;
      default: return 1;
    }
  }

  generateCode(): string {
    const code = generateCode(this.formArray ?? null, 2);
    return code;
  }


  deleteForm(index: number): void {
    this.formArray.removeAt(index);
  }
  
}
