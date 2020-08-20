import { Component, OnInit } from '@angular/core';
import { FadeInAnimation } from 'src/app/modules/shared/animations/fade-in.animations';

@Component({
  selector: 'gf-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  animations: [FadeInAnimation]
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
