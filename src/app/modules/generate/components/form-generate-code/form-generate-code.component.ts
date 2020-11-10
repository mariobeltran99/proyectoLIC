import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { generateFormCode } from '../../constants/generate-form-code';
import { FormTypeOption } from '../../interfaces/form-type-option';
import { CodeReviewGenerationDialogComponent } from '../code-review-generation-dialog/code-review-generation-dialog.component';

@Component({
  selector: 'mfw-form-generate-code',
  templateUrl: './form-generate-code.component.html',
  styleUrls: ['./form-generate-code.component.scss']
})
export class FormGenerateCodeComponent {
  @Input() formItems: FormTypeOption[];

  constructor(
    private dialog: MatDialog
  ) { }

  generateFormCode(): void {
    const code = generateFormCode(this.formItems);
    this.dialog.open(CodeReviewGenerationDialogComponent, {
      data: { code }
    });
  }
}
