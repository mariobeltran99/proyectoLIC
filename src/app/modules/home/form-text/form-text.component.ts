import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'gf-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.scss']
})
export class FormTextComponent implements OnInit {
  lblreq: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.lblreq = this.fb.group({
      label: new FormControl(null),
      placeholder: new FormControl(null)
    });
  }

}
