import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { GenerationSelectorFormComponent } from './components/generation-selector-form/generation-selector-form.component';
import { FormsListComponent } from './components/forms-list/forms-list.component';
import { FormGenerationComponent } from './components/form-generation/form-generation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormItemStore } from './redux/form-items.store';
import { FormGenerateCodeComponent } from './components/form-generate-code/form-generate-code.component';
import { CodeReviewGenerationDialogComponent } from './components/code-review-generation-dialog/code-review-generation-dialog.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const externalComponents = [
  GenerationSelectorFormComponent,
  FormsListComponent,
  FormGenerationComponent
];

const components = [
  ...externalComponents,
  FormGenerateCodeComponent,
  CodeReviewGenerationDialogComponent
];

const materialImports = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDividerModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatDialogModule,
  ClipboardModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ...materialImports,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...externalComponents
  ],
  providers: [
    FormItemStore
  ]
})
export class MfwGenerateModule { }
