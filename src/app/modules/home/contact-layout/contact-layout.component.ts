import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gf-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['./contact-layout.component.scss']
})
export class ContactLayoutComponent implements OnInit {

  constructor() { }
  auth(params: void) {
    alert("El correo ha sido enviada!");
  }

  ngOnInit(): void {
  }


}
