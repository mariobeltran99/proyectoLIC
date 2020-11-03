import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'gf-form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.scss']
})
export class FormNumberComponent implements OnInit {
  lblreq: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.lblreq = this.fb.group({
      label: new FormControl(null),
      placeholder: new FormControl(null),
      max: new FormControl(null,[
        Validators.pattern(/^[0-9]+([,.][0-9]+)?$/),
      ]),
      min: new FormControl(null,[
        Validators.pattern(/^[0-9]+([,.][0-9]+)?$/),
      ]),
    });
  }

}
