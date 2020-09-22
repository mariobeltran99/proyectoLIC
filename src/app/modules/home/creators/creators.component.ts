import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gf-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  constructor() { }
  @Input() dev;

  ngOnInit(): void {
  }
}
