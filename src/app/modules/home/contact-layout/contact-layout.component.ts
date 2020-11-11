import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'gf-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['./contact-layout.component.scss'],
})
export class ContactLayoutComponent implements OnInit {
  contactForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private fb: FormBuilder, private snack: MatSnackBar) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(100),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ]),
    });
  }
  send() {
    this.openSnackBar();
    this.resetContactForm();
  }
  openSnackBar() {
    this.snack.open('¡Gracias por tu mensaje!', 'X', {
      duration: 6000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  isFieldValid1(field: string) {
    const contact = this.contactForm.get(field);
    return (contact.touched || contact.dirty) && !this.contactForm.valid;
  }
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.contactForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    switch (field) {
      case 'name':
        if (forms.hasError('minlength')) {
          message = 'Debe contener al menos 2 caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo 60 caracteres';
        }
        break;
      case 'email':
        if (forms.hasError('email')) {
          message =
            'El correo ingresado es inválido, debe cumplir este formato: juan@gmail.com';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo 100 caracteres';
        }
        break;
      case 'message':
        if (forms.hasError('minlength')) {
          message = 'Debe contener al menos 6 caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo 100 caracteres';
        }
        break;
    }
    return message;
  }
  resetContactForm() {
    this.contactForm.reset();
    Object.keys(this.contactForm.controls).forEach((key) => {
      this.contactForm.controls[key].setErrors(null);
    });
  }
}
