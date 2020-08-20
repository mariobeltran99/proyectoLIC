import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from './modules/core/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navigationService.writeNavigationLoadEvents();
  }

  ngOnDestroy(): void {
    this.navigationService.destroyNavigationEvents();
  }
}
