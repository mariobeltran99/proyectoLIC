import { Component, OnInit } from '@angular/core';
import { DevelopersService } from 'src/app/modules/home/services/developers.service';

@Component({
  selector: 'gf-about-us-layout',
  templateUrl: './about-us-layout.component.html',
  styleUrls: ['./about-us-layout.component.scss']
})

export class AboutUsLayoutComponent implements OnInit {

  public developers = [];

  constructor(
    private developerService: DevelopersService
  ) { }

  retrieveDevelopers(): void {
    this.developerService.getDeveloper().subscribe((devs: any) => {
      this.developers = devs;
    });
  }

  ngOnInit(): void {
    this.retrieveDevelopers();
  }
}
