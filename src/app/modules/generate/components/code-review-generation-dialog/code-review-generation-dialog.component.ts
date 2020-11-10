import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getThemeOptions } from '../../constants/theme-options';
import { Theme } from '../../interfaces/theme';

@Component({
  selector: 'mfw-code-review-generation-dialog',
  templateUrl: './code-review-generation-dialog.component.html',
  styleUrls: ['./code-review-generation-dialog.component.scss']
})
export class CodeReviewGenerationDialogComponent implements OnInit {

  htmlCodePlainText: string;
  cssAssetCodePlainText: string;
  themeFormControl: FormControl;
  themeOptions = getThemeOptions();

  get completeFormHtmlCode(): string {
    if (this.htmlCodePlainText && this.cssAssetCodePlainText) {
      return `${this.htmlCodePlainText} ${this.cssAssetCodePlainText}`;
    }
    return null;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private dialogData: { code: string },
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.themeFormControl = this.formBuilder.control(this.themeOptions[0], [Validators.required]);
  }

  ngOnInit(): void {
    this.htmlCodePlainText = this.dialogData.code;
    this.setAssetCSSTheme(this.themeFormControl.value ?? null);
  }

  setAssetCSSTheme(theme: Theme): void {
    if (!!theme) {
      const cssThemeUrl = `${location}/assets/${theme.urlAsset}`;
      this.cssAssetCodePlainText = `<link rel="stylesheet" href="${cssThemeUrl}">`;
    }
  }

  onThemeValueChanges(theme: Theme): void {
    this.setAssetCSSTheme(theme);
  }

  copyClipboard(): void {
    this.snackBar.open('Copied text', null, { duration: 3e3 });
  }

  preview(): void {
    sessionStorage.setItem('formCode', this.htmlCodePlainText);
    location.href = `${location.origin}/assets/preview/`;
  }
}
