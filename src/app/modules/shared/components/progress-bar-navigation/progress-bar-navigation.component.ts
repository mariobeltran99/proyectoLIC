import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.states';
import * as navigationSelectors from 'src/app/store/selectors/navigation.selectors';

@Component({
  selector: 'gf-progress-bar-navigation',
  templateUrl: './progress-bar-navigation.component.html',
  styleUrls: ['./progress-bar-navigation.component.scss']
})
export class ProgressBarNavigationComponent {

  navigationStatus$ = this.store.select(navigationSelectors.getNavigationStatus);

  constructor(
    private store: Store<AppState>
  ) { }
}
