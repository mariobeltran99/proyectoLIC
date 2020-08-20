import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.states';
import { toggleNavigationStatus } from 'src/app/store/actions/navigation.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class NavigationService {

  private timeout: number = null;
  private destroy$ = new Subject();

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  writeNavigationLoadEvents(): void {
    this.router.events.pipe(
      takeUntil(this.destroy$)
    ).subscribe(routerEvent => {
      if (routerEvent instanceof NavigationStart) {
        this.store.dispatch(toggleNavigationStatus({ flag: true }));
      }
      if (routerEvent instanceof NavigationEnd) {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => this.store.dispatch(toggleNavigationStatus({ flag: false })), 600);
      }
    });
  }

  destroyNavigationEvents(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
